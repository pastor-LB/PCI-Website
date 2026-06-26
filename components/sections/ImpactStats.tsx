import { Utensils, Users, HeartHandshake, GraduationCap, CalendarDays } from "lucide-react";
import StatCard from "@/components/ui/StatCard";
import Section from "@/components/ui/Section";

const stats = [
  { value: "1,000,000+", label: "Meals Distributed in 2025", icon: <Utensils /> },
  { value: "900+", label: "Families Served Monthly", icon: <Users /> },
  { value: "5,650", label: "Senior Care Boxes Delivered", icon: <HeartHandshake /> },
  { value: "220+", label: "Children in Life-Skills Training", icon: <GraduationCap /> },
  { value: "22+", label: "Years Serving Bridgeport", icon: <CalendarDays /> },
];

export default function ImpactStats() {
  return (
    <Section background="purple" padding="md">
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} variant="gold-on-dark" />
        ))}
      </div>
    </Section>
  );
}
