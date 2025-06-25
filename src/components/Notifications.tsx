import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  type: "reminder" | "assignment" | "achievement" | "system";
  read: boolean;
}

const Notifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      title: "Напоминание о занятии",
      message: "Веб-разработка начнется через 30 минут",
      time: "8:30",
      type: "reminder",
      read: false,
    },
    {
      id: "2",
      title: "Новое задание",
      message: "Добавлена практическая работа по алгоритмам",
      time: "Вчера",
      type: "assignment",
      read: false,
    },
    {
      id: "3",
      title: "Поздравляем!",
      message: 'Получено достижение "30 дней подряд"',
      time: "2 дня назад",
      type: "achievement",
      read: true,
    },
    {
      id: "4",
      title: "Обновление системы",
      message: "Добавлены новые функции в личный кабинет",
      time: "3 дня назад",
      type: "system",
      read: true,
    },
  ]);

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif)),
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((notif) => ({ ...notif, read: true })));
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "reminder":
        return "Bell";
      case "assignment":
        return "FileText";
      case "achievement":
        return "Trophy";
      case "system":
        return "Settings";
      default:
        return "Info";
    }
  };

  const getNotificationColor = (type: string) => {
    switch (type) {
      case "reminder":
        return "bg-primary/10 text-primary border-primary/20";
      case "assignment":
        return "bg-accent/10 text-accent border-accent/20";
      case "achievement":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "system":
        return "bg-muted text-muted-foreground border-border";
      default:
        return "bg-muted";
    }
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Icon name="Bell" size={24} />
            Уведомления
            {unreadCount > 0 && (
              <Badge variant="destructive" className="ml-2">
                {unreadCount}
              </Badge>
            )}
          </CardTitle>
          {unreadCount > 0 && (
            <Button variant="outline" size="sm" onClick={markAllAsRead}>
              <Icon name="CheckCheck" size={16} className="mr-1" />
              Прочитать все
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 rounded-lg border transition-all hover:shadow-sm cursor-pointer ${
                !notification.read
                  ? "bg-primary/5 border-primary/20"
                  : "bg-muted/30"
              }`}
              onClick={() => markAsRead(notification.id)}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`p-2 rounded-lg ${getNotificationColor(notification.type)}`}
                >
                  <Icon
                    name={getNotificationIcon(notification.type)}
                    size={16}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-medium text-sm">
                      {notification.title}
                    </h4>
                    {!notification.read && (
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">
                    {notification.message}
                  </p>
                  <span className="text-xs text-muted-foreground">
                    {notification.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {notifications.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            <Icon name="Inbox" size={48} className="mx-auto mb-2 opacity-50" />
            <p>Уведомлений пока нет</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default Notifications;
