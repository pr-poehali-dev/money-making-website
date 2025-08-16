import { useState, useEffect } from 'react';

interface DataPoint {
  month: string;
  revenue: number;
}

interface GrowthChartProps {
  data: DataPoint[];
  className?: string;
}

const GrowthChart = ({ data, className = '' }: GrowthChartProps) => {
  const [animatedData, setAnimatedData] = useState<DataPoint[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const chartElement = document.getElementById('growth-chart');
    if (chartElement) {
      observer.observe(chartElement);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const animateChart = () => {
      data.forEach((point, index) => {
        setTimeout(() => {
          setAnimatedData(prev => [...prev, point]);
        }, index * 300);
      });
    };

    animateChart();
  }, [isVisible, data]);

  const maxRevenue = Math.max(...data.map(d => d.revenue));
  const chartHeight = 200;
  const chartWidth = 300;

  const getPointPosition = (index: number, revenue: number) => {
    const x = (index / (data.length - 1)) * (chartWidth - 40) + 20;
    const y = chartHeight - (revenue / maxRevenue) * (chartHeight - 40) - 20;
    return { x, y };
  };

  const pathData = animatedData.map((point, index) => {
    const { x, y } = getPointPosition(index, point.revenue);
    return index === 0 ? `M ${x} ${y}` : `L ${x} ${y}`;
  }).join(' ');

  return (
    <div id="growth-chart" className={`relative ${className}`}>
      <svg 
        width={chartWidth} 
        height={chartHeight} 
        className="overflow-visible"
        viewBox={`0 0 ${chartWidth} ${chartHeight}`}
      >
        {/* Grid lines */}
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="hsl(var(--border))" strokeWidth="0.5" opacity="0.3"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        {/* Gradient for area under curve */}
        <defs>
          <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3"/>
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.05"/>
          </linearGradient>
        </defs>
        
        {/* Area under curve */}
        {animatedData.length > 1 && (
          <path
            d={`${pathData} L ${getPointPosition(animatedData.length - 1, animatedData[animatedData.length - 1].revenue).x} ${chartHeight - 20} L 20 ${chartHeight - 20} Z`}
            fill="url(#areaGradient)"
            className="animate-fade-in"
          />
        )}
        
        {/* Main line */}
        <path
          d={pathData}
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-fade-in"
          style={{
            strokeDasharray: animatedData.length > 0 ? 'none' : '1000',
            strokeDashoffset: animatedData.length > 0 ? '0' : '1000',
            transition: 'stroke-dashoffset 2s ease-in-out'
          }}
        />
        
        {/* Data points */}
        {animatedData.map((point, index) => {
          const { x, y } = getPointPosition(index, point.revenue);
          return (
            <g key={index}>
              <circle
                cx={x}
                cy={y}
                r="4"
                fill="hsl(var(--primary))"
                stroke="hsl(var(--background))"
                strokeWidth="2"
                className="animate-scale-in"
                style={{ animationDelay: `${index * 0.3}s` }}
              />
              <circle
                cx={x}
                cy={y}
                r="8"
                fill="hsl(var(--primary))"
                opacity="0"
                className="hover:opacity-20 transition-opacity cursor-pointer"
              />
              {/* Tooltip on hover */}
              <text
                x={x}
                y={y - 15}
                textAnchor="middle"
                fontSize="12"
                fill="hsl(var(--foreground))"
                className="font-semibold opacity-0 hover:opacity-100 transition-opacity"
              >
                {point.revenue.toLocaleString()}₽
              </text>
            </g>
          );
        })}
        
        {/* X-axis labels */}
        {data.map((point, index) => {
          const { x } = getPointPosition(index, point.revenue);
          return (
            <text
              key={index}
              x={x}
              y={chartHeight - 5}
              textAnchor="middle"
              fontSize="11"
              fill="hsl(var(--muted-foreground))"
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {point.month}
            </text>
          );
        })}
      </svg>
      
      {/* Growth percentage indicator */}
      {animatedData.length > 1 && (
        <div className="absolute top-4 right-4 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold animate-fade-in">
          +{Math.round(((animatedData[animatedData.length - 1].revenue - animatedData[0].revenue) / animatedData[0].revenue) * 100)}%
        </div>
      )}
    </div>
  );
};

export default GrowthChart;