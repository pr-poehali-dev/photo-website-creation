import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Schedule = () => {
  const schedule = [
    {
      day: "День 1",
      title: "Основы инженерного проектирования",
      topics: ["Введение в CAD системы", "Основы черчения", "Стандарты ГОСТ"],
      time: "9:00 - 18:00",
      instructor: "Александр Петров",
      level: "Базовый",
    },
    {
      day: "День 2",
      title: "3D моделирование",
      topics: ["SolidWorks", "Параметрическое моделирование", "Сборки"],
      time: "9:00 - 18:00",
      instructor: "Мария Иванова",
      level: "Средний",
    },
    {
      day: "День 3",
      title: "Анализ и симуляция",
      topics: ["FEM анализ", "Расчет прочности", "Термический анализ"],
      time: "9:00 - 18:00",
      instructor: "Дмитрий Сидоров",
      level: "Продвинутый",
    },
    {
      day: "День 4",
      title: "Производственные технологии",
      topics: [
        "Технология изготовления",
        "Материаловедение",
        "Контроль качества",
      ],
      time: "9:00 - 18:00",
      instructor: "Елена Козлова",
      level: "Средний",
    },
    {
      day: "День 5",
      title: "Проектная работа",
      topics: ["Итоговый проект", "Презентация", "Защита работ"],
      time: "9:00 - 17:00",
      instructor: "Команда экспертов",
      level: "Практика",
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Базовый":
        return "bg-green-100 text-green-700";
      case "Средний":
        return "bg-yellow-100 text-yellow-700";
      case "Продвинутый":
        return "bg-red-100 text-red-700";
      default:
        return "bg-blue-100 text-blue-700";
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Программа обучения
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Пятидневная интенсивная программа с практическими занятиями и
            проектной работой
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {schedule.map((item, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-500 text-white w-20 h-20 rounded-full flex items-center justify-center">
                      <span className="text-lg font-bold">
                        {item.day.split(" ")[1]}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 sm:mb-0">
                        {item.title}
                      </h3>
                      <Badge className={getLevelColor(item.level)}>
                        {item.level}
                      </Badge>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                          <Icon name="BookOpen" size={16} />
                          Темы занятий:
                        </h4>
                        <ul className="text-gray-600 space-y-1">
                          {item.topics.map((topic, topicIndex) => (
                            <li
                              key={topicIndex}
                              className="flex items-center gap-2"
                            >
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Icon name="Clock" size={16} />
                          <span>{item.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Icon name="User" size={16} />
                          <span>{item.instructor}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 max-w-2xl mx-auto">
            <Icon
              name="Info"
              size={32}
              className="text-blue-600 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              В стоимость включено
            </h3>
            <p className="text-gray-600">
              Все материалы, доступ к ПО, сертификат, обеды и кофе-брейки
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
