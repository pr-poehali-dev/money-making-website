import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import AnimatedCounter from "@/components/AnimatedCounter";
import CaseModal from "@/components/CaseModal";
import { useState } from "react";

const Index = () => {
  const [selectedCase, setSelectedCase] = useState<any>(null);
  const [isCaseModalOpen, setIsCaseModalOpen] = useState(false);

  const cases = [
    {
      client: "IT Консалтинг",
      revenue: "150,000₽",
      growth: "+287%",
      period: "3 месяца",
      description: "Запуск автоматизированной воронки продаж",
      industry: "IT",
      challenge: "Низкая конверсия в продажах, отсутствие автоматизации процессов, высокая стоимость привлечения клиентов",
      solution: "Внедрили CRM-систему, настроили email-маркетинг, создали воронку продаж с автоматическими триггерами",
      results: [
        "Увеличение конверсии с 2% до 8%",
        "Снижение стоимости лида на 65%",
        "Автоматизация 80% процессов продаж",
        "Рост выручки в 3.8 раза"
      ],
      chartData: [
        { month: "Янв", revenue: 45000 },
        { month: "Фев", revenue: 68000 },
        { month: "Мар", revenue: 95000 },
        { month: "Апр", revenue: 150000 }
      ],
      timeline: [
        {
          phase: "Аудит и анализ",
          duration: "2 недели",
          activities: ["Анализ текущих процессов", "Выявление узких мест", "Разработка стратегии"]
        },
        {
          phase: "Настройка системы",
          duration: "3 недели",
          activities: ["Внедрение CRM", "Настройка воронки", "Интеграция сервисов"]
        },
        {
          phase: "Запуск и оптимизация",
          duration: "8 недель",
          activities: ["A/B тестирование", "Мониторинг метрик", "Постоянная оптимизация"]
        }
      ]
    },
    {
      client: "E-commerce проект", 
      revenue: "340,000₽",
      growth: "+450%",
      period: "6 месяцев", 
      description: "Масштабирование через контекстную рекламу",
      industry: "E-commerce",
      challenge: "Ограниченный рекламный бюджет, низкий ROAS, неэффективные кампании в Google Ads и Яндекс.Директ",
      solution: "Провели глубокую аналитику, пересобрали семантику, настроили умные кампании и автоматические стратегии",
      results: [
        "ROAS вырос с 150% до 680%",
        "Снижение CPC на 45%",
        "Увеличение трафика в 4 раза",
        "Рост конверсии до 12%"
      ],
      chartData: [
        { month: "Янв", revenue: 75000 },
        { month: "Фев", revenue: 120000 },
        { month: "Мар", revenue: 180000 },
        { month: "Апр", revenue: 250000 },
        { month: "Май", revenue: 310000 },
        { month: "Июн", revenue: 340000 }
      ],
      timeline: [
        {
          phase: "Аудит рекламы",
          duration: "1 неделя",
          activities: ["Анализ текущих кампаний", "Проверка настроек", "Оценка конкурентов"]
        },
        {
          phase: "Пересборка кампаний",
          duration: "2 недели",
          activities: ["Новая структура аккаунта", "Расширение семантики", "Настройка автостратегий"]
        },
        {
          phase: "Масштабирование",
          duration: "20 недель",
          activities: ["Увеличение бюджетов", "Запуск новых направлений", "Оптимизация воронки"]
        }
      ]
    },
    {
      client: "Образовательная платформа",
      revenue: "220,000₽", 
      growth: "+320%",
      period: "4 месяца",
      description: "Создание экспертного личного бренда",
      industry: "Образование",
      challenge: "Отсутствие узнаваемости эксперта, низкий чек за услуги, нет постоянного потока клиентов",
      solution: "Построили личный бренд через контент-маркетинг, запустили авторские курсы, создали комьюнити",
      results: [
        "Рост среднего чека в 8 раз",
        "Постоянная база из 2000+ подписчиков",
        "50+ корпоративных клиентов",
        "Запись на 3 месяца вперед"
      ],
      chartData: [
        { month: "Янв", revenue: 55000 },
        { month: "Фев", revenue: 95000 },
        { month: "Мар", revenue: 160000 },
        { month: "Апр", revenue: 220000 }
      ],
      timeline: [
        {
          phase: "Позиционирование",
          duration: "2 недели",
          activities: ["Определение ниши", "Создание УТП", "Разработка стратегии контента"]
        },
        {
          phase: "Контент-план",
          duration: "3 недели",
          activities: ["Запуск блога", "Активность в соцсетях", "Выступления на мероприятиях"]
        },
        {
          phase: "Монетизация",
          duration: "12 недель",
          activities: ["Запуск курсов", "Консультации", "Корпоративное обучение"]
        }
      ]
    }
  ];

  const services = [
    {
      title: "Автоматизация продаж",
      description: "Настройка CRM и воронок для увеличения конверсии в 3-5 раз",
      price: "от 150,000₽",
      icon: "Settings"
    },
    {
      title: "Масштабирование бизнеса", 
      description: "Стратегии роста доходов с помощью digital-маркетинга",
      price: "от 200,000₽",
      icon: "TrendingUp"
    },
    {
      title: "Личный бренд эксперта",
      description: "Создание экспертности для привлечения премиум клиентов", 
      price: "от 100,000₽",
      icon: "Crown"
    }
  ];

  const testimonials = [
    {
      name: "Александр Петров",
      company: "CEO IT Solutions",
      text: "За 4 месяца вырос доход с 80К до 320К в месяц. Команда профессионалов!",
      revenue: "320,000₽"
    },
    {
      name: "Мария Козлова", 
      company: "Основатель MarketingPro",
      text: "Потрясающие результаты! Превысили планку в 100К уже на втором месяце.",
      revenue: "180,000₽"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm bg-background/95 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Crown" className="text-primary" size={32} />
              <span className="font-montserrat font-bold text-2xl">EARNINGS 100K+</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
              <a href="#cases" className="hover:text-primary transition-colors">Кейсы</a>
              <a href="#pricing" className="hover:text-primary transition-colors">Тарифы</a>
              <a href="#testimonials" className="hover:text-primary transition-colors">Отзывы</a>
              <Button variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                Консультация
              </Button>
            </div>
            <Button variant="outline" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <Badge variant="secondary" className="text-primary font-semibold px-4 py-2">
                🚀 Премиум услуги
              </Badge>
              <h1 className="font-montserrat text-5xl lg:text-6xl font-bold leading-tight">
                Заработок от{" "}
                <span className="text-primary">100,000₽</span>{" "}
                в месяц
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Эксклюзивные стратегии и персональное сопровождение для достижения 
                высоких доходов. Результат или возврат денег.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg">
                  Получить консультацию
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
                  <Icon name="Play" className="mr-2" size={20} />
                  Смотреть кейсы
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="text-center">
                  <AnimatedCounter 
                    endValue={150} 
                    suffix="+"
                    className="text-2xl font-montserrat font-bold text-primary"
                  />
                  <div className="text-sm text-muted-foreground">Клиентов</div>
                </div>
                <div className="text-center">
                  <AnimatedCounter 
                    endValue={98} 
                    suffix="%"
                    className="text-2xl font-montserrat font-bold text-primary"
                  />
                  <div className="text-sm text-muted-foreground">Результат</div>
                </div>
                <div className="text-center">
                  <AnimatedCounter 
                    endValue={4.9} 
                    className="text-2xl font-montserrat font-bold text-primary"
                  />
                  <div className="text-sm text-muted-foreground">Рейтинг</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-3xl"></div>
              <img 
                src="/img/9b9962f4-e788-48a7-9055-b3cdeb5ccca8.jpg" 
                alt="Успешный бизнесмен" 
                className="relative z-10 w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-montserrat text-4xl font-bold mb-4">Премиум услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Эксклюзивные решения для масштабирования вашего бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300 animate-fade-in border-0 bg-card/50 backdrop-blur-sm">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <Icon name={service.icon as any} className="text-primary" size={32} />
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {service.price}
                    </Badge>
                  </div>
                  <CardTitle className="font-montserrat text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed mb-6">
                    {service.description}
                  </CardDescription>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                    Подробнее
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-montserrat text-4xl font-bold mb-4">Результаты наших клиентов</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Реальные кейсы с подтвержденными результатами
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {cases.map((caseItem, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 animate-fade-in border-border/50">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="font-montserrat text-lg">{caseItem.client}</CardTitle>
                    <Badge variant="default" className="bg-primary text-primary-foreground">
                      {caseItem.growth}
                    </Badge>
                  </div>
                  <div className="text-3xl font-montserrat font-bold text-primary mb-2">
                    {caseItem.revenue}
                  </div>
                  <div className="text-sm text-muted-foreground">{caseItem.period}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{caseItem.description}</p>
                  <div className="flex items-center justify-between">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => {
                        setSelectedCase(caseItem);
                        setIsCaseModalOpen(true);
                      }}
                    >
                      Подробности
                    </Button>
                    <div className="flex items-center space-x-2">
                      <Icon name="TrendingUp" className="text-primary" size={16} />
                      <span className="text-sm font-semibold text-primary">Рост {caseItem.growth}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-montserrat text-4xl font-bold mb-4">Тарифные планы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите оптимальный пакет для достижения ваших целей
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="relative animate-fade-in border-border/50">
              <CardHeader>
                <CardTitle className="font-montserrat text-xl">Старт</CardTitle>
                <div className="text-3xl font-bold">150,000₽</div>
                <CardDescription>Базовая настройка и запуск</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Icon name="Check" className="text-primary" size={16} />
                    <span className="text-sm">Анализ ниши и конкурентов</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Check" className="text-primary" size={16} />
                    <span className="text-sm">Настройка базовой воронки</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Check" className="text-primary" size={16} />
                    <span className="text-sm">2 месяца сопровождения</span>
                  </div>
                </div>
                <Button className="w-full" variant="outline">
                  Выбрать план
                </Button>
              </CardContent>
            </Card>

            <Card className="relative animate-fade-in border-primary scale-105 shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                Популярный
              </Badge>
              <CardHeader>
                <CardTitle className="font-montserrat text-xl">Премиум</CardTitle>
                <div className="text-3xl font-bold">300,000₽</div>
                <CardDescription>Полное сопровождение и масштабирование</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Icon name="Check" className="text-primary" size={16} />
                    <span className="text-sm">Всё из тарифа "Старт"</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Check" className="text-primary" size={16} />
                    <span className="text-sm">Автоматизация продаж</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Check" className="text-primary" size={16} />
                    <span className="text-sm">Настройка рекламы</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Check" className="text-primary" size={16} />
                    <span className="text-sm">6 месяцев сопровождения</span>
                  </div>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Выбрать план
                </Button>
              </CardContent>
            </Card>

            <Card className="relative animate-fade-in border-border/50">
              <CardHeader>
                <CardTitle className="font-montserrat text-xl">VIP</CardTitle>
                <div className="text-3xl font-bold">500,000₽</div>
                <CardDescription>Индивидуальная работа с экспертом</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Icon name="Check" className="text-primary" size={16} />
                    <span className="text-sm">Всё из тарифа "Премиум"</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Check" className="text-primary" size={16} />
                    <span className="text-sm">Личный менеджер</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Check" className="text-primary" size={16} />
                    <span className="text-sm">Создание личного бренда</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Check" className="text-primary" size={16} />
                    <span className="text-sm">12 месяцев сопровождения</span>
                  </div>
                </div>
                <Button className="w-full" variant="outline">
                  Выбрать план
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-montserrat text-4xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Что говорят те, кто уже достиг результата
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="animate-fade-in border-border/50">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="User" className="text-primary" size={24} />
                    </div>
                    <div>
                      <CardTitle className="font-montserrat text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.company}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="ml-auto bg-primary/10 text-primary">
                      {testimonial.revenue}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-muted-foreground italic leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-primary fill-primary" size={16} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="font-montserrat text-4xl font-bold mb-6">
              Готовы начать зарабатывать 100,000₽+ в месяц?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Запишитесь на бесплатную консультацию и узнайте, как именно 
              вы можете достичь таких результатов в вашей нише
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg">
                <Icon name="Calendar" className="mr-2" size={20} />
                Записаться на консультацию
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
                <Icon name="MessageCircle" className="mr-2" size={20} />
                Написать в WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Icon name="Crown" className="text-primary" size={24} />
                <span className="font-montserrat font-bold text-lg">EARNINGS 100K+</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Премиум услуги для достижения высоких доходов
              </p>
            </div>
            <div>
              <h4 className="font-montserrat font-semibold mb-4">Услуги</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Автоматизация продаж</div>
                <div>Масштабирование бизнеса</div>
                <div>Личный бренд</div>
              </div>
            </div>
            <div>
              <h4 className="font-montserrat font-semibold mb-4">Компания</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>О нас</div>
                <div>Кейсы</div>
                <div>Блог</div>
              </div>
            </div>
            <div>
              <h4 className="font-montserrat font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>+7 (999) 123-45-67</div>
                <div>info@earnings100k.ru</div>
                <div>Москва</div>
              </div>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <div>© 2024 EARNINGS 100K+. Все права защищены.</div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-primary transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Case Modal */}
      {selectedCase && (
        <CaseModal 
          isOpen={isCaseModalOpen}
          onClose={() => setIsCaseModalOpen(false)}
          caseData={selectedCase}
        />
      )}
    </div>
  );
};

export default Index;