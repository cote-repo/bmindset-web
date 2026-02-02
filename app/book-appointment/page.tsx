"use client";

import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Calendar,
  Clock,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Loader2,
  AlertCircle,
  ArrowLeft,
  MapPin,
  Video,
  Phone,
  Users,
  Sparkles,
  Globe,
} from "lucide-react";

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
];

const meetingTypes = [
  { id: "video", label: "Video Call", icon: Video, duration: "30 min" },
  { id: "phone", label: "Phone Call", icon: Phone, duration: "30 min" },
  { id: "in-person", label: "In-Person", icon: Users, duration: "45 min" },
];

const getDaysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate();
};

const getFirstDayOfMonth = (year: number, month: number) => {
  return new Date(year, month, 1).getDay();
};

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function BookAppointmentPage() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedMeetingType, setSelectedMeetingType] = useState<string>("video");
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [mounted, setMounted] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    topic: "",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDayOfMonth = getFirstDayOfMonth(currentYear, currentMonth);

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const isDateSelectable = (day: number) => {
    const date = new Date(currentYear, currentMonth, day);
    const dayOfWeek = date.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) return false;
    if (date < new Date(today.getFullYear(), today.getMonth(), today.getDate())) return false;
    return true;
  };

  const handleDateSelect = (day: number) => {
    if (isDateSelectable(day)) {
      setSelectedDate(new Date(currentYear, currentMonth, day));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          date: selectedDate?.toISOString(),
          time: selectedTime,
          meetingType: selectedMeetingType,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStep(4);
        setStatus("idle");
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Failed to book appointment. Please try again.");
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute -bottom-40 right-1/3 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse delay-500" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-border/50 bg-background/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.jpg"
                alt="BMINDSET TECHNOLOGY Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <div className="flex flex-col">
                <span className="text-base font-bold text-foreground leading-tight">
                  BMINDSET
                </span>
                <span className="text-[10px] text-muted-foreground leading-tight">
                  TECHNOLOGY
                </span>
              </div>
            </Link>
            <Link 
              href="/" 
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <main className="relative z-10 py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left Side - Info */}
            <div className="lg:col-span-2">
              <div className="sticky top-8">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  <Sparkles className="h-4 w-4" />
                  Free Consultation
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance leading-tight">
                  Schedule Your
                  <span className="block text-primary">Discovery Call</span>
                </h1>
                
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Book a personalized consultation with our GIS experts. 
                  We will discuss your geospatial challenges and explore 
                  solutions tailored to your needs.
                </p>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Globe className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Expert Consultation</h3>
                      <p className="text-sm text-muted-foreground">Get insights from seasoned GIS professionals</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Custom Solutions</h3>
                      <p className="text-sm text-muted-foreground">Tailored recommendations for your business</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Quick Response</h3>
                      <p className="text-sm text-muted-foreground">Get started within 24 hours of booking</p>
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="p-4 rounded-xl bg-muted/50 border border-border">
                  <p className="text-sm text-muted-foreground mb-2">Have questions? Contact us directly:</p>
                  <p className="font-medium text-foreground">info@bmindsets.com</p>
                  <p className="font-medium text-foreground">+91 9493604752</p>
                </div>
              </div>
            </div>

            {/* Right Side - Booking Card */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-3xl border border-border shadow-xl overflow-hidden">
                {/* Progress Steps */}
                <div className="px-6 py-4 border-b border-border bg-muted/30">
                  <div className="flex items-center justify-between max-w-md mx-auto">
                    {[1, 2, 3].map((s) => (
                      <React.Fragment key={s}>
                        <div className="flex items-center gap-2">
                          <div 
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                              step >= s 
                                ? "bg-primary text-primary-foreground" 
                                : "bg-muted text-muted-foreground"
                            }`}
                          >
                            {step > s ? <CheckCircle className="h-4 w-4" /> : s}
                          </div>
                          <span className={`text-sm hidden sm:block ${step >= s ? "text-foreground font-medium" : "text-muted-foreground"}`}>
                            {s === 1 ? "Meeting Type" : s === 2 ? "Date & Time" : "Details"}
                          </span>
                        </div>
                        {s < 3 && (
                          <div className={`flex-1 h-0.5 mx-2 ${step > s ? "bg-primary" : "bg-border"}`} />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                <div className="p-6 lg:p-8">
                  {/* Step 1: Meeting Type */}
                  {step === 1 && (
                    <div className="animate-in fade-in duration-300">
                      <h2 className="text-2xl font-bold text-foreground mb-2">
                        Choose Meeting Type
                      </h2>
                      <p className="text-muted-foreground mb-6">
                        Select how you would like to connect with us
                      </p>

                      <div className="space-y-3">
                        {meetingTypes.map((type) => (
                          <button
                            key={type.id}
                            onClick={() => setSelectedMeetingType(type.id)}
                            className={`w-full p-4 rounded-xl border-2 flex items-center gap-4 transition-all ${
                              selectedMeetingType === type.id
                                ? "border-primary bg-primary/5"
                                : "border-border hover:border-primary/50"
                            }`}
                          >
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                              selectedMeetingType === type.id 
                                ? "bg-primary text-primary-foreground" 
                                : "bg-muted text-muted-foreground"
                            }`}>
                              <type.icon className="h-6 w-6" />
                            </div>
                            <div className="text-left flex-1">
                              <h3 className="font-semibold text-foreground">{type.label}</h3>
                              <p className="text-sm text-muted-foreground">{type.duration} consultation</p>
                            </div>
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                              selectedMeetingType === type.id
                                ? "border-primary"
                                : "border-border"
                            }`}>
                              {selectedMeetingType === type.id && (
                                <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                              )}
                            </div>
                          </button>
                        ))}
                      </div>

                      <Button 
                        onClick={() => setStep(2)}
                        className="w-full mt-8 bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base"
                      >
                        Continue
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  )}

                  {/* Step 2: Date & Time */}
                  {step === 2 && (
                    <div className="animate-in fade-in duration-300">
                      <button
                        onClick={() => setStep(1)}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
                      >
                        <ChevronLeft className="h-4 w-4" />
                        Back
                      </button>

                      <h2 className="text-2xl font-bold text-foreground mb-2">
                        Select Date & Time
                      </h2>
                      <p className="text-muted-foreground mb-6">
                        Choose your preferred date and time slot
                      </p>

                      <div className="grid lg:grid-cols-2 gap-6">
                        {/* Calendar */}
                        <div className="bg-muted/30 rounded-2xl p-4">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="font-semibold text-foreground">
                              {monthNames[currentMonth]} {currentYear}
                            </h3>
                            <div className="flex gap-1">
                              <button
                                onClick={prevMonth}
                                className="p-2 rounded-lg hover:bg-muted transition-colors"
                                aria-label="Previous month"
                              >
                                <ChevronLeft className="h-4 w-4" />
                              </button>
                              <button
                                onClick={nextMonth}
                                className="p-2 rounded-lg hover:bg-muted transition-colors"
                                aria-label="Next month"
                              >
                                <ChevronRight className="h-4 w-4" />
                              </button>
                            </div>
                          </div>

                          <div className="grid grid-cols-7 gap-1 mb-2">
                            {dayNames.map((day) => (
                              <div
                                key={day}
                                className="text-center text-xs font-medium text-muted-foreground py-1"
                              >
                                {day}
                              </div>
                            ))}
                          </div>

                          <div className="grid grid-cols-7 gap-1">
                            {Array.from({ length: firstDayOfMonth }).map((_, index) => (
                              <div key={`empty-${index}`} className="aspect-square" />
                            ))}
                            {Array.from({ length: daysInMonth }).map((_, index) => {
                              const day = index + 1;
                              const isSelectable = isDateSelectable(day);
                              const isSelected =
                                selectedDate?.getDate() === day &&
                                selectedDate?.getMonth() === currentMonth &&
                                selectedDate?.getFullYear() === currentYear;
                              const isToday =
                                day === today.getDate() &&
                                currentMonth === today.getMonth() &&
                                currentYear === today.getFullYear();

                              return (
                                <button
                                  key={day}
                                  onClick={() => handleDateSelect(day)}
                                  disabled={!isSelectable}
                                  className={`aspect-square rounded-lg text-sm font-medium transition-all ${
                                    isSelected
                                      ? "bg-primary text-primary-foreground shadow-lg scale-105"
                                      : isToday
                                      ? "bg-accent/20 text-accent ring-1 ring-accent"
                                      : isSelectable
                                      ? "hover:bg-muted text-foreground"
                                      : "text-muted-foreground/30 cursor-not-allowed"
                                  }`}
                                >
                                  {day}
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {/* Time Slots */}
                        <div>
                          <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                            <Clock className="h-4 w-4 text-primary" />
                            Available Times
                          </h3>

                          {selectedDate ? (
                            <div className="grid grid-cols-2 gap-2">
                              {timeSlots.map((time) => (
                                <button
                                  key={time}
                                  onClick={() => setSelectedTime(time)}
                                  className={`py-3 px-3 rounded-xl text-sm font-medium transition-all ${
                                    selectedTime === time
                                      ? "bg-primary text-primary-foreground shadow-lg"
                                      : "bg-muted hover:bg-muted/80 text-foreground hover:scale-[1.02]"
                                  }`}
                                >
                                  {time}
                                </button>
                              ))}
                            </div>
                          ) : (
                            <div className="flex items-center justify-center h-48 text-muted-foreground text-sm bg-muted/30 rounded-xl">
                              <p>Select a date to view times</p>
                            </div>
                          )}
                        </div>
                      </div>

                      <Button 
                        onClick={() => setStep(3)}
                        disabled={!selectedDate || !selectedTime}
                        className="w-full mt-8 bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base disabled:opacity-50"
                      >
                        Continue
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  )}

                  {/* Step 3: Details Form */}
                  {step === 3 && (
                    <div className="animate-in fade-in duration-300">
                      <button
                        onClick={() => setStep(2)}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
                      >
                        <ChevronLeft className="h-4 w-4" />
                        Back
                      </button>

                      <h2 className="text-2xl font-bold text-foreground mb-2">
                        Your Details
                      </h2>
                      <p className="text-muted-foreground mb-6">
                        Complete your booking information
                      </p>

                      {/* Selected Summary */}
                      <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mb-6">
                        <div className="flex flex-wrap items-center gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-primary" />
                            <span className="font-medium">
                              {selectedDate?.toLocaleDateString("en-US", {
                                weekday: "short",
                                month: "short",
                                day: "numeric",
                              })}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-primary" />
                            <span className="font-medium">{selectedTime}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            {selectedMeetingType === "video" && <Video className="h-4 w-4 text-primary" />}
                            {selectedMeetingType === "phone" && <Phone className="h-4 w-4 text-primary" />}
                            {selectedMeetingType === "in-person" && <Users className="h-4 w-4 text-primary" />}
                            <span className="font-medium capitalize">{selectedMeetingType.replace("-", " ")}</span>
                          </div>
                        </div>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        {status === "error" && (
                          <div className="flex items-center gap-2 p-3 bg-destructive/10 text-destructive rounded-lg">
                            <AlertCircle className="h-5 w-5 flex-shrink-0" />
                            <p className="text-sm">{errorMessage}</p>
                          </div>
                        )}

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                              Full Name *
                            </label>
                            <Input
                              id="name"
                              type="text"
                              placeholder="Your full name"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              required
                              disabled={status === "loading"}
                              className="h-11"
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                              Email Address *
                            </label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="your@email.com"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              required
                              disabled={status === "loading"}
                              className="h-11"
                            />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                              Phone Number *
                            </label>
                            <Input
                              id="phone"
                              type="tel"
                              placeholder="+91 XXXXX XXXXX"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              required
                              disabled={status === "loading"}
                              className="h-11"
                            />
                          </div>
                          <div>
                            <label htmlFor="company" className="block text-sm font-medium text-foreground mb-1.5">
                              Company
                            </label>
                            <Input
                              id="company"
                              type="text"
                              placeholder="Your company name"
                              value={formData.company}
                              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                              disabled={status === "loading"}
                              className="h-11"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="topic" className="block text-sm font-medium text-foreground mb-1.5">
                            What would you like to discuss? *
                          </label>
                          <Textarea
                            id="topic"
                            placeholder="Tell us about your project or what you'd like to discuss..."
                            rows={4}
                            value={formData.topic}
                            onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                            required
                            disabled={status === "loading"}
                          />
                        </div>

                        <Button
                          type="submit"
                          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base gap-2"
                          disabled={status === "loading"}
                        >
                          {status === "loading" ? (
                            <>
                              <Loader2 className="h-4 w-4 animate-spin" />
                              Booking...
                            </>
                          ) : (
                            <>
                              <CheckCircle className="h-4 w-4" />
                              Confirm Booking
                            </>
                          )}
                        </Button>
                      </form>
                    </div>
                  )}

                  {/* Step 4: Success */}
                  {step === 4 && (
                    <div className="animate-in fade-in duration-300 text-center py-8">
                      <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="h-10 w-10 text-accent" />
                      </div>
                      
                      <h2 className="text-3xl font-bold text-foreground mb-3">
                        Booking Confirmed!
                      </h2>
                      
                      <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                        Your appointment has been successfully scheduled. 
                        We have sent a confirmation email to {formData.email}
                      </p>

                      <div className="bg-muted/50 rounded-xl p-6 mb-8 max-w-sm mx-auto">
                        <div className="space-y-3 text-left">
                          <div className="flex items-center gap-3">
                            <Calendar className="h-5 w-5 text-primary" />
                            <span className="font-medium">
                              {selectedDate?.toLocaleDateString("en-US", {
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Clock className="h-5 w-5 text-primary" />
                            <span className="font-medium">{selectedTime}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            {selectedMeetingType === "video" && <Video className="h-5 w-5 text-primary" />}
                            {selectedMeetingType === "phone" && <Phone className="h-5 w-5 text-primary" />}
                            {selectedMeetingType === "in-person" && <Users className="h-5 w-5 text-primary" />}
                            <span className="font-medium capitalize">{selectedMeetingType.replace("-", " ")} Meeting</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link href="/">
                          <Button variant="outline" className="gap-2 bg-transparent">
                            <ArrowLeft className="h-4 w-4" />
                            Back to Home
                          </Button>
                        </Link>
                        <Button 
                          onClick={() => {
                            setStep(1);
                            setSelectedDate(null);
                            setSelectedTime(null);
                            setFormData({ name: "", email: "", phone: "", company: "", topic: "" });
                          }}
                          className="bg-primary text-primary-foreground hover:bg-primary/90"
                        >
                          Book Another
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
