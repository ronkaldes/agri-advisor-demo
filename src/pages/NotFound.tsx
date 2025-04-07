
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div dir="rtl" className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center max-w-lg p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-agri-green">404</h1>
        <p className="text-xl text-gray-600 mb-6">אופס! הדף שחיפשת לא נמצא</p>
        <p className="text-gray-500 mb-6">
          הדף "{location.pathname}" אינו קיים במערכת. ייתכן שהכתובת שהזנת שגויה או שהדף הוסר.
        </p>
        <Button asChild className="bg-agri-green hover:bg-agri-darkgreen">
          <Link to="/">חזרה לדף הבית</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
