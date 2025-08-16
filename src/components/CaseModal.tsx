import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import GrowthChart from "./GrowthChart";

interface CaseDetails {
  client: string;
  revenue: string;
  growth: string;
  period: string;
  description: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  chartData: Array<{
    month: string;
    revenue: number;
  }>;
  timeline: Array<{
    phase: string;
    duration: string;
    activities: string[];
  }>;
}

interface CaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  caseData: CaseDetails;
}

const CaseModal = ({ isOpen, onClose, caseData }: CaseModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="font-montserrat text-2xl">{caseData.client}</DialogTitle>
            <div className="flex items-center space-x-2">
              <Badge variant="default" className="bg-primary text-primary-foreground text-lg px-3 py-1">
                {caseData.growth}
              </Badge>
              <Badge variant="secondary" className="text-lg px-3 py-1">
                {caseData.industry}
              </Badge>
            </div>
          </div>
          <DialogDescription className="text-lg">
            {caseData.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-8 mt-6">
          {/* Key Metrics */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-muted/30 rounded-xl">
              <div className="text-3xl font-montserrat font-bold text-primary mb-2">
                {caseData.revenue}
              </div>
              <div className="text-sm text-muted-foreground">Финальный доход</div>
            </div>
            <div className="text-center p-6 bg-muted/30 rounded-xl">
              <div className="text-3xl font-montserrat font-bold text-primary mb-2">
                {caseData.growth}
              </div>
              <div className="text-sm text-muted-foreground">Рост дохода</div>
            </div>
            <div className="text-center p-6 bg-muted/30 rounded-xl">
              <div className="text-3xl font-montserrat font-bold text-primary mb-2">
                {caseData.period}
              </div>
              <div className="text-sm text-muted-foreground">Период работы</div>
            </div>
          </div>

          {/* Growth Chart */}
          <div className="bg-card border rounded-xl p-6">
            <h3 className="font-montserrat text-lg font-semibold mb-4 flex items-center">
              <Icon name="TrendingUp" className="mr-2 text-primary" size={20} />
              Динамика роста доходов
            </h3>
            <div className="flex justify-center">
              <GrowthChart data={caseData.chartData} />
            </div>
          </div>

          {/* Challenge & Solution */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border rounded-xl p-6">
              <h3 className="font-montserrat text-lg font-semibold mb-4 flex items-center text-destructive">
                <Icon name="AlertTriangle" className="mr-2" size={20} />
                Вызов
              </h3>
              <p className="text-muted-foreground leading-relaxed">{caseData.challenge}</p>
            </div>
            <div className="bg-card border rounded-xl p-6">
              <h3 className="font-montserrat text-lg font-semibold mb-4 flex items-center text-primary">
                <Icon name="Lightbulb" className="mr-2" size={20} />
                Решение
              </h3>
              <p className="text-muted-foreground leading-relaxed">{caseData.solution}</p>
            </div>
          </div>

          {/* Results */}
          <div className="bg-card border rounded-xl p-6">
            <h3 className="font-montserrat text-lg font-semibold mb-4 flex items-center">
              <Icon name="Target" className="mr-2 text-primary" size={20} />
              Достигнутые результаты
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {caseData.results.map((result, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="text-primary flex-shrink-0" size={20} />
                  <span className="text-muted-foreground">{result}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-card border rounded-xl p-6">
            <h3 className="font-montserrat text-lg font-semibold mb-6 flex items-center">
              <Icon name="Clock" className="mr-2 text-primary" size={20} />
              Этапы работы
            </h3>
            <div className="space-y-6">
              {caseData.timeline.map((phase, index) => (
                <div key={index} className="relative">
                  {index < caseData.timeline.length - 1 && (
                    <div className="absolute left-4 top-12 w-0.5 h-full bg-border"></div>
                  )}
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-montserrat font-semibold">{phase.phase}</h4>
                        <Badge variant="outline" className="text-xs">{phase.duration}</Badge>
                      </div>
                      <ul className="space-y-1">
                        {phase.activities.map((activity, actIndex) => (
                          <li key={actIndex} className="text-sm text-muted-foreground flex items-center space-x-2">
                            <Icon name="ArrowRight" size={12} className="text-primary flex-shrink-0" />
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* CTA */}
          <div className="text-center space-y-4">
            <h3 className="font-montserrat text-xl font-semibold">
              Хотите похожие результаты?
            </h3>
            <p className="text-muted-foreground">
              Запишитесь на консультацию и узнайте, как мы можем помочь вашему бизнесу
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Icon name="Calendar" className="mr-2" size={20} />
                Записаться на консультацию
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="MessageCircle" className="mr-2" size={20} />
                Обсудить проект
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CaseModal;