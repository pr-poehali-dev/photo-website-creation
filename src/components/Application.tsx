import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Application = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    motivation: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Анимированный фон */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.3),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.3),transparent_50%)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Подать заявку
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Места ограничены! Заполните форму и мы свяжемся с вами в течение 24
            часов
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Форма заявки */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-2xl">
                Форма заявки
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-white mb-2 block">
                    Полное имя *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                    placeholder="Введите ваше имя"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-white mb-2 block">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-white mb-2 block">
                    Телефон *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>

                <div>
                  <Label htmlFor="experience" className="text-white mb-2 block">
                    Опыт работы
                  </Label>
                  <Input
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                    placeholder="Укажите ваш опыт в инженерии"
                  />
                </div>

                <div>
                  <Label htmlFor="motivation" className="text-white mb-2 block">
                    Мотивация
                  </Label>
                  <Textarea
                    id="motivation"
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleChange}
                    className="bg-white/20 border-white/30 text-white placeholder:text-gray-300 min-h-[100px]"
                    placeholder="Расскажите, почему вы хотите участвовать в интенсиве"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-3 text-lg font-semibold"
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Информация о курсе */}
          <div className="space-y-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-green-500 rounded-full p-3">
                    <Icon name="CheckCircle" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Ближайший поток
                    </h3>
                    <p className="text-gray-200">15-19 января 2025</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-white">
                    <Icon name="MapPin" size={16} />
                    <span>Москва, Технопарк Сколково</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <Icon name="Clock" size={16} />
                    <span>40 академических часов</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <Icon name="Users" size={16} />
                    <span>Группа до 20 человек</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Стоимость
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-200">Обычная цена</span>
                    <span className="text-gray-400 line-through">89 000 ₽</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold">
                      Цена со скидкой
                    </span>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-white">
                        59 000 ₽
                      </div>
                      <Badge className="bg-red-500 text-white">-30%</Badge>
                    </div>
                  </div>
                  <div className="border-t border-white/20 pt-4">
                    <p className="text-sm text-gray-200">
                      Скидка действует до 31 декабря 2024
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="text-lg font-semibold text-white mb-4">
                Контакты
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-200">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-3 text-gray-200">
                  <Icon name="Mail" size={16} />
                  <span>info@intensiv.ru</span>
                </div>
                <div className="flex items-center gap-3 text-gray-200">
                  <Icon name="MessageCircle" size={16} />
                  <span>Telegram: @intensiv_support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Application;
