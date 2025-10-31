import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [stars, setStars] = useState<{ left: string; top: string; delay: string }[]>([]);

  useEffect(() => {
    const newStars = Array.from({ length: 50 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
    }));
    setStars(newStars);
  }, []);

  const services = [
    {
      title: 'Экспресс-консультация',
      duration: '30 минут',
      price: '3 000 ₽',
      description: 'Быстрый анализ линий руки с акцентом на главный вопрос. Идеально для первого знакомства с хиромантией.',
      icon: 'Sparkles'
    },
    {
      title: 'Полный разбор судьбы',
      duration: '90 минут',
      price: '8 000 ₽',
      description: 'Глубокий анализ линий жизни, судьбы, сердца и ума. Прогноз на год вперёд, советы по здоровью и карьере.',
      icon: 'Eye'
    },
    {
      title: 'Совместимость партнёров',
      duration: '60 минут',
      price: '5 500 ₽',
      description: 'Анализ рук обоих партнёров, определение совместимости, рекомендации для гармонии в отношениях.',
      icon: 'Heart'
    },
    {
      title: 'Детский потенциал',
      duration: '45 минут',
      price: '4 000 ₽',
      description: 'Чтение руки ребёнка: таланты, склонности, рекомендации для развития способностей.',
      icon: 'Star'
    },
    {
      title: 'Бизнес-прогноз',
      duration: '75 минут',
      price: '7 000 ₽',
      description: 'Анализ предпринимательских способностей, благоприятные периоды для сделок и финансовых решений.',
      icon: 'TrendingUp'
    },
    {
      title: 'Расширенный разбор',
      duration: '120 минут',
      price: '12 000 ₽',
      description: 'Максимально подробная консультация: все аспекты жизни, прошлое и будущее, ответы на все вопросы.',
      icon: 'Infinity'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="stars">
        {stars.map((star, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: star.left,
              top: star.top,
              animationDelay: star.delay,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="mb-8 flex justify-center animate-float">
              <Icon name="Hand" size={80} className="text-primary" />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 glow-text">
              Иван Линт
            </h1>
            <p className="text-2xl md:text-3xl mb-4 text-primary font-cormorant">
              Хиромант • Мистик • Проводник судьбы
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Раскрываю тайны, сокрытые на ладонях. Более 15 лет изучаю древнее искусство чтения судьбы по линиям рук.
            </p>
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 animate-glow"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Узнать своё будущее
            </Button>
          </div>
        </section>

        <section id="about" className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="card-glow border-2 border-primary/30 bg-card/80 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-4xl md:text-5xl text-center mb-4">
                  Обо мне
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-lg">
                <p className="leading-relaxed">
                  Моё путешествие в мир хиромантии началось в древних библиотеках Индии, где я постигал 
                  священные знания вед и тантр. Годы практики и медитаций открыли мне способность видеть 
                  не только линии, но и энергетические потоки, управляющие судьбой человека.
                </p>
                <p className="leading-relaxed">
                  Каждая ладонь — это карта жизни, записанная космическими силами в момент рождения. 
                  Я помогаю людям расшифровать эти знаки, понять своё предназначение и принять верные решения 
                  в ключевые моменты жизни.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center p-6 rounded-lg bg-primary/10">
                    <div className="text-4xl font-bold text-primary mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">лет практики</div>
                  </div>
                  <div className="text-center p-6 rounded-lg bg-primary/10">
                    <div className="text-4xl font-bold text-primary mb-2">3000+</div>
                    <div className="text-sm text-muted-foreground">консультаций</div>
                  </div>
                  <div className="text-center p-6 rounded-lg bg-primary/10">
                    <div className="text-4xl font-bold text-primary mb-2">98%</div>
                    <div className="text-sm text-muted-foreground">точность прогнозов</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="services" className="py-20 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 glow-text">
              Услуги и прайс-лист
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Выберите формат консультации, который подходит именно вам
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card 
                  key={index} 
                  className="card-glow border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 bg-card/80 backdrop-blur"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Icon name={service.icon} size={40} className="text-accent" />
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{service.price}</div>
                        <div className="text-sm text-muted-foreground">{service.duration}</div>
                      </div>
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Card className="inline-block card-glow border-2 border-accent/50 bg-card/80 backdrop-blur">
                <CardContent className="p-6">
                  <p className="text-lg mb-2">
                    <Icon name="Gift" className="inline mr-2" size={24} />
                    <strong>Специальное предложение:</strong>
                  </p>
                  <p className="text-muted-foreground">
                    При записи на консультацию в течение этой недели — скидка 10% на любую услугу
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
              Записаться на консультацию
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Свяжитесь со мной удобным способом, чтобы назначить встречу
            </p>
            <Card className="card-glow border-2 border-primary/30 bg-card/80 backdrop-blur">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-center gap-4 text-lg">
                    <Icon name="Phone" className="text-primary" size={28} />
                    <a href="tel:+79001234567" className="hover:text-primary transition-colors">
                      +7 (900) 123-45-67
                    </a>
                  </div>
                  <div className="flex items-center justify-center gap-4 text-lg">
                    <Icon name="Mail" className="text-primary" size={28} />
                    <a href="mailto:ivan@lint-palmistry.ru" className="hover:text-primary transition-colors">
                      ivan@lint-palmistry.ru
                    </a>
                  </div>
                  <div className="flex items-center justify-center gap-4 text-lg">
                    <Icon name="MessageCircle" className="text-primary" size={28} />
                    <a href="https://t.me/ivanlint" className="hover:text-primary transition-colors">
                      @ivanlint
                    </a>
                  </div>
                  <div className="pt-6 border-t border-primary/20">
                    <p className="text-sm text-muted-foreground mb-4">
                      Приём ведётся по предварительной записи
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <Icon name="MapPin" className="inline mr-2" size={18} />
                      Москва, ул. Мистическая, д. 13
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <footer className="py-8 px-4 border-t border-primary/20">
          <div className="max-w-6xl mx-auto text-center text-muted-foreground">
            <p className="mb-2">© 2025 Иван Линт. Хиромантия и эзотерические практики</p>
            <p className="text-sm">Знание прошлого освещает путь в будущее</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
