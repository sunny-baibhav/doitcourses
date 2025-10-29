import * as React from "react";
import { createPortal } from "react-dom";
import { Avatar, AvatarFallback, AvatarImage } from "./Avtar";
import { BadgeCheck } from "lucide-react";

const Notifications = [
  { name: "Oliver K.", location: "Canberra, ACT", time: "29 minutes ago", avatar: "/logo.svg" },
  { name: "Sarah M.", location: "New York, NY", time: "45 minutes ago", avatar: "/image2.png" },
  { name: "Priya S.", location: "Mumbai, India", time: "1 hour ago", avatar: "/image.png" },
  { name: "James L.", location: "London, UK", time: "2 hours ago", avatar: "/logo.svg" },
];

export default function PurchaseNotification() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % Notifications.length);
        setIsVisible(true);
      }, 400);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const current = Notifications[currentIndex];
  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      className={`fixed bottom-6 left-6 z-50 transition-all duration-500 transform ${
        isVisible ? "translate-x-0 opacity-100" : "-translate-x-5 opacity-0"
      }`}
    >
      <div className="flex items-center gap-3 p-3 rounded-xl shadow-lg border border-gray-200 bg-white w-80 pointer-events-auto">
        {/* Avatar */}
        <Avatar>
          <AvatarImage src={current.avatar} alt={current.name} />
          <AvatarFallback className="bg-blue-600 text-white">
            {current.name.charAt(0)}
          </AvatarFallback>
        </Avatar>

        {/* Content */}
        <div className="flex flex-col">
          <div className="text-sm font-semibold text-gray-800 bg-gray-100 px-2 py-0.5 rounded-md inline-block">
            {current.name} <span className="font-normal text-gray-600">from {current.location}</span>
          </div>

          <p className="text-sm text-gray-700 mt-1">
            Recently purchased{" "}
            <span className="font-semibold text-gray-900">DoitCourse</span>
          </p>

          <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
            <span>{current.time}</span>
            <span>•</span>
            <div className="flex items-center gap-1 text-blue-600">
              <BadgeCheck className="h-3 w-3" />
              <span className="font-medium">verified by Proof</span>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
