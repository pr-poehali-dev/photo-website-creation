import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Алексей Морозов",
      role: "Ведущий инженер-конструктор",
      company: "ОАК",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Интенсив полностью изменил мой подход к проектированию. Теперь работаю в крупной авиакомпании с зарплатой в 2 раза выше!",
      result: "Зарплата увеличилась на 120%",
    },
    {
      name: "Мария Кузнецова",
      role: "Инженер-технолог",
      company: "Сбер",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Превосходная программа! Практические навыки, которые я получила, сразу применила в работе. Команда преподавателей - просто космос!",
      result: "Повышение через 3 месяца",
    },
    {
      name: "Дмитрий Волков",
      role: "Главный конструктор",
      company: "Росатом",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Отличная подготовка специалистов. Рекомендую всем, кто хочет развиваться в инженерии. Качество обучения на высшем уровне!",
      result: "Переход в топ-компанию",
    },
    {
      name: "Елена Соколова",
      role: "Инженер-проектировщик",
      company: "Газпром",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Благодаря интенсиву получила работу мечты! Программа очень насыщенная, но результат того стоит. Спасибо за профессионализм!",
      result: "Трудоустройство за 2 недели",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        name="Star"
        size={16}
        className={
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }
      />
    ));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Отзывы выпускников
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Истории успеха наших студентов, которые изменили свою карьеру после
            прохождения интенсива
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <Avatar className="w-16 h-16">
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                    <AvatarFallback className="bg-blue-100 text-blue-600 text-lg font-semibold">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-blue-600 font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                  <div className="flex gap-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>

                <blockquote className="text-gray-700 mb-6 italic">
                  "{testimonial.text}"
                </blockquote>

                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <div className="flex items-center gap-2">
                    <Icon
                      name="TrendingUp"
                      size={20}
                      className="text-green-600"
                    />
                    <span className="font-semibold text-green-800">
                      Результат:
                    </span>
                    <span className="text-green-700">{testimonial.result}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-600">Удовлетворенность</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">
                  85%
                </div>
                <div className="text-gray-600">Трудоустройство</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  150%
                </div>
                <div className="text-gray-600">Рост зарплаты</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
