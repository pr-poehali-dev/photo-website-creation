import Calendar from "@/components/Calendar";
import UserProfile from "@/components/UserProfile";
import Notifications from "@/components/Notifications";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-orange-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Образовательная платформа
          </h1>
          <p className="text-muted-foreground mt-2">
            Управляйте своим обучением эффективно
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Левая колонка - Календарь */}
          <div className="lg:col-span-2">
            <Calendar />
          </div>

          {/* Правая колонка - Профиль и уведомления */}
          <div className="space-y-6">
            <UserProfile />
            <Notifications />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
