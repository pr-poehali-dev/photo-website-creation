import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const About = () => {
  const features = [
    {
      icon: "Lightbulb",
      title: "Инновационные технологии",
      description:
        "Изучите современные методы проектирования и 3D-моделирования",
    },
    {
      icon: "Users",
      title: "Экспертные наставники",
      description: "Ведущие инженеры с опытом работы в топ-компаниях",
    },
    {
      icon: "Award",
      title: "Сертификация",
      description: "Получите официальный сертификат по завершении программы",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            О программе
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Интенсивная программа для тех, кто хочет стать профессиональным
            инженером-конструктором и работать с передовыми технологиями
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Что вы получите
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 rounded-full p-2 mt-1">
                  <Icon name="Check" size={16} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Практические навыки
                  </h4>
                  <p className="text-gray-600">
                    Работа с реальными проектами и кейсами
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 rounded-full p-2 mt-1">
                  <Icon name="Check" size={16} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Портфолио</h4>
                  <p className="text-gray-600">3 готовых проекта для резюме</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 rounded-full p-2 mt-1">
                  <Icon name="Check" size={16} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Карьерная поддержка
                  </h4>
                  <p className="text-gray-600">
                    Помощь в трудоустройстве и развитии
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop"
              alt="Инженерное проектирование"
              className="rounded-xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 rounded-full p-3">
                  <Icon
                    name="TrendingUp"
                    size={24}
                    className="text-green-600"
                  />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">↑156%</div>
                  <div className="text-sm text-gray-600">Рост зарплаты</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-blue-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name={feature.icon} size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
