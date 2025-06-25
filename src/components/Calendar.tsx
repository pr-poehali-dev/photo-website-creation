import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface CalendarEvent {
  id: string;
  title: string;
  time: string;
  type: "lecture" | "practice" | "exam";
  completed?: boolean;
}

const Calendar = () => {
  const [currentWeek, setCurrentWeek] = useState(0);

  const events: Record<string, CalendarEvent[]> = {
    Понедельник: [
      {
        id: "1",
        title: "Основы программирования",
        time: "10:00",
        type: "lecture",
      },
      {
        id: "2",
        title: "Практическое задание",
        time: "14:00",
        type: "practice",
        completed: true,
      },
    ],
    Вторник: [
      {
        id: "3",
        title: "Алгоритмы и структуры данных",
        time: "11:00",
        type: "lecture",
      },
    ],
    Среда: [
      { id: "4", title: "Веб-разработка", time: "09:00", type: "lecture" },
      {
        id: "5",
        title: "Лабораторная работа",
        time: "15:00",
        type: "practice",
      },
    ],
    Четверг: [
      { id: "6", title: "Базы данных", time: "10:30", type: "lecture" },
    ],
    Пятница: [
      { id: "7", title: "Итоговый экзамен", time: "12:00", type: "exam" },
    ],
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case "lecture":
        return "bg-primary/10 text-primary border-primary/20";
      case "practice":
        return "bg-accent/10 text-accent border-accent/20";
      case "exam":
        return "bg-destructive/10 text-destructive border-destructive/20";
      default:
        return "bg-muted";
    }
  };

  const getEventIcon = (type: string) => {
    switch (type) {
      case "lecture":
        return "BookOpen";
      case "practice":
        return "Code";
      case "exam":
        return "Trophy";
      default:
        return "Calendar";
    }
  };

  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Icon name="Calendar" size={24} />
            Расписание занятий
          </CardTitle>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentWeek((prev) => prev - 1)}
            >
              <Icon name="ChevronLeft" size={16} />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentWeek((prev) => prev + 1)}
            >
              <Icon name="ChevronRight" size={16} />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {Object.entries(events).map(([day, dayEvents]) => (
            <div
              key={day}
              className="border rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-lg mb-3 text-primary">{day}</h3>
              <div className="space-y-2">
                {dayEvents.map((event) => (
                  <div
                    key={event.id}
                    className={`flex items-center gap-3 p-3 rounded-lg border transition-all hover:scale-105 ${getEventColor(event.type)} ${event.completed ? "opacity-60" : ""}`}
                  >
                    <Icon name={getEventIcon(event.type)} size={20} />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{event.title}</span>
                        {event.completed && (
                          <Badge variant="secondary" className="text-xs">
                            Выполнено
                          </Badge>
                        )}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {event.time}
                      </span>
                    </div>
                    <Badge variant="outline" className="capitalize">
                      {event.type === "lecture"
                        ? "Лекция"
                        : event.type === "practice"
                          ? "Практика"
                          : "Экзамен"}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Calendar;
