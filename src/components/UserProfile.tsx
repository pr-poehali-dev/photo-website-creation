import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const UserProfile = () => {
  const user = {
    name: "Анна Смирнова",
    email: "anna.smirnova@example.com",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=150&h=150&fit=crop&crop=face",
    level: "Продвинутый",
    progress: 75,
    completedCourses: 12,
    totalCourses: 16,
    streak: 15,
    nextClass: "Веб-разработка завтра в 09:00",
  };

  const achievements = [
    { name: "Первые шаги", icon: "Star", earned: true },
    { name: "30 дней подряд", icon: "Flame", earned: true },
    { name: "Мастер кода", icon: "Code", earned: false },
    { name: "Эксперт", icon: "Award", earned: false },
  ];

  return (
    <Card className="animate-scale-in">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon name="User" size={24} />
          Личный кабинет
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Профиль пользователя */}
        <div className="flex items-center gap-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback className="bg-primary text-primary-foreground text-xl">
              {user.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-muted-foreground">{user.email}</p>
            <Badge className="mt-2">{user.level}</Badge>
          </div>
        </div>

        {/* Прогресс обучения */}
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">Общий прогресс</span>
              <span className="text-sm text-muted-foreground">
                {user.progress}%
              </span>
            </div>
            <Progress value={user.progress} className="h-2" />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-3 bg-primary/5 rounded-lg">
              <div className="text-2xl font-bold text-primary">
                {user.completedCourses}
              </div>
              <div className="text-sm text-muted-foreground">
                Пройдено курсов
              </div>
            </div>
            <div className="text-center p-3 bg-accent/5 rounded-lg">
              <div className="text-2xl font-bold text-accent">
                {user.streak}
              </div>
              <div className="text-sm text-muted-foreground">Дней подряд</div>
            </div>
            <div className="text-center p-3 bg-muted rounded-lg">
              <div className="text-2xl font-bold">
                {user.totalCourses - user.completedCourses}
              </div>
              <div className="text-sm text-muted-foreground">Осталось</div>
            </div>
          </div>
        </div>

        {/* Ближайшее занятие */}
        <div className="p-4 border rounded-lg bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="flex items-center gap-2 mb-2">
            <Icon name="Clock" size={16} />
            <span className="font-medium">Следующее занятие</span>
          </div>
          <p className="text-sm">{user.nextClass}</p>
        </div>

        {/* Достижения */}
        <div>
          <h3 className="font-medium mb-3">Достижения</h3>
          <div className="grid grid-cols-2 gap-2">
            {achievements.map((achievement) => (
              <div
                key={achievement.name}
                className={`flex items-center gap-2 p-2 rounded-lg transition-all ${
                  achievement.earned
                    ? "bg-primary/10 text-primary"
                    : "bg-muted/50 text-muted-foreground"
                }`}
              >
                <Icon name={achievement.icon} size={16} />
                <span className="text-sm">{achievement.name}</span>
                {achievement.earned && <Icon name="Check" size={14} />}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserProfile;
