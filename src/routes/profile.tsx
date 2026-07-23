import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { toast } from "sonner";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "My Profile — CodeBreakdowns" },
      {
        name: "description",
        content: "Manage your profile information on CodeBreakdowns.",
      },
    ],
  }),
  component: ProfilePage,
});

const initial = {
  fullName: "Aditi Kumar",
  email: "aditi@example.com",
  phone: "+91 98765 43210",
  college: "Indian Institute of Technology, Delhi",
  degree: "B.Tech, Computer Science",
  gradYear: "2025",
  city: "New Delhi",
  state: "Delhi",
  country: "India",
  linkedin: "linkedin.com/in/aditi-kumar",
  github: "github.com/aditik",
};

type Fields = typeof initial;

const groups: {
  title: string;
  fields: { key: keyof Fields; label: string; type?: string }[];
}[] = [
  {
    title: "Personal",
    fields: [
      { key: "fullName", label: "Full Name" },
      { key: "email", label: "Email", type: "email" },
      { key: "phone", label: "Phone Number" },
    ],
  },
  {
    title: "Education",
    fields: [
      { key: "college", label: "College" },
      { key: "degree", label: "Degree" },
      { key: "gradYear", label: "Graduation Year" },
    ],
  },
  {
    title: "Location",
    fields: [
      { key: "city", label: "City" },
      { key: "state", label: "State" },
      { key: "country", label: "Country" },
    ],
  },
  {
    title: "Social",
    fields: [
      { key: "linkedin", label: "LinkedIn" },
      { key: "github", label: "GitHub" },
    ],
  },
];

function ProfilePage() {
  const [values, setValues] = useState<Fields>(initial);
  const [saved, setSaved] = useState<Fields>(initial);

  const dirty = JSON.stringify(values) !== JSON.stringify(saved);

  const set = (k: keyof Fields, v: string) =>
    setValues((p) => ({ ...p, [k]: v }));

  const onSave = () => {
    setSaved(values);
    toast.success("Profile updated", {
      description: "Your changes have been saved.",
    });
  };

  const onCancel = () => setValues(saved);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          My Profile
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Manage your personal details and preferences.
        </p>
      </div>

      <Card className="p-6 sm:p-8">
        <div className="flex items-center gap-4 border-b border-border pb-6">
          <div className="relative">
            <Avatar className="h-20 w-20 border border-border">
              <AvatarFallback className="bg-primary/10 text-xl font-semibold text-primary">
                AK
              </AvatarFallback>
            </Avatar>
            <button
              type="button"
              aria-label="Change photo"
              className="absolute -bottom-1 -right-1 grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground shadow-md transition-transform hover:scale-105"
            >
              <Camera className="h-4 w-4" />
            </button>
          </div>
          <div>
            <div className="text-base font-semibold">{values.fullName}</div>
            <div className="text-sm text-muted-foreground">{values.email}</div>
          </div>
        </div>

        <div className="mt-6 space-y-8">
          {groups.map((g) => (
            <section key={g.title}>
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                {g.title}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {g.fields.map((f) => (
                  <div key={f.key} className="space-y-1.5">
                    <Label htmlFor={f.key}>{f.label}</Label>
                    <Input
                      id={f.key}
                      type={f.type ?? "text"}
                      value={values[f.key]}
                      onChange={(e) => set(f.key, e.target.value)}
                    />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-end gap-3 border-t border-border pt-6">
          <Button variant="ghost" onClick={onCancel} disabled={!dirty}>
            Cancel
          </Button>
          <Button onClick={onSave} disabled={!dirty}>
            Save Changes
          </Button>
        </div>
      </Card>
    </div>
  );
}
