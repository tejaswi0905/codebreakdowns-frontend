import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Loader2, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "sonner";
import { useAuthStore } from "@/store/authStore";
import { updateUserProfile } from "@/services/api";
import { ProtectedRoute } from "@/components/ProtectedRoute";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "My Profile — CodeBreakdowns" },
      {
        name: "description",
        content: "Manage your personal and academic profile on CodeBreakdowns.",
      },
    ],
  }),
  component: () => (
    <ProtectedRoute>
      <ProfilePage />
    </ProtectedRoute>
  ),
});

interface ProfileFields {
  fullName: string;
  email: string;
  phone: string;
  college: string;
  degree: string;
  gradYear: string;
  city: string;
  state: string;
  country: string;
  linkedin: string;
  github: string;
}

const emptyFields: ProfileFields = {
  fullName: "",
  email: "",
  phone: "",
  college: "",
  degree: "",
  gradYear: "",
  city: "",
  state: "",
  country: "",
  linkedin: "",
  github: "",
};

function getInitials(name?: string): string {
  if (!name) return "U";
  const trimmed = name.trim();
  if (!trimmed) return "U";
  const parts = trimmed.split(/\s+/);
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
  }
  return trimmed.slice(0, 2).toUpperCase();
}

const fieldGroups: {
  title: string;
  fields: { key: keyof ProfileFields; label: string; placeholder: string; type?: string; readOnly?: boolean; hint?: string }[];
}[] = [
  {
    title: "Personal Information",
    fields: [
      { key: "fullName", label: "Full Name", placeholder: "e.g. Alex Johnson" },
      { 
        key: "email", 
        label: "Email Address", 
        placeholder: "alex@example.com", 
        type: "email", 
        readOnly: true,
        hint: "Managed via your OAuth provider (GitHub)",
      },
      { key: "phone", label: "Phone Number", placeholder: "+91 98765 43210" },
    ],
  },
  {
    title: "Education & Academics",
    fields: [
      { key: "college", label: "College / University", placeholder: "e.g. Stanford University or IIT Delhi" },
      { key: "degree", label: "Degree & Major", placeholder: "e.g. B.Tech Computer Science" },
      { key: "gradYear", label: "Graduation Year", placeholder: "e.g. 2026" },
    ],
  },
  {
    title: "Location",
    fields: [
      { key: "city", label: "City", placeholder: "e.g. Bengaluru" },
      { key: "state", label: "State / Province", placeholder: "e.g. Karnataka" },
      { key: "country", label: "Country", placeholder: "e.g. India" },
    ],
  },
  {
    title: "Social & Professional Profiles",
    fields: [
      { key: "linkedin", label: "LinkedIn URL or Username", placeholder: "https://linkedin.com/in/username" },
      { key: "github", label: "GitHub URL or Username", placeholder: "https://github.com/username" },
    ],
  },
];

function ProfilePage() {
  const { user, setUser } = useAuthStore();
  const [values, setValues] = useState<ProfileFields>(emptyFields);
  const [saved, setSaved] = useState<ProfileFields>(emptyFields);
  const [isSaving, setIsSaving] = useState(false);

  // Sync form values from authentic authenticated user state
  useEffect(() => {
    if (user) {
      const synced: ProfileFields = {
        fullName: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        college: user.college || "",
        degree: user.degree || "",
        gradYear: user.gradYear || "",
        city: user.city || "",
        state: user.state || "",
        country: user.country || "",
        linkedin: user.linkedin || "",
        github: user.github || "",
      };
      setValues(synced);
      setSaved(synced);
    }
  }, [user]);

  const isDirty = JSON.stringify(values) !== JSON.stringify(saved);

  const handleFieldChange = (key: keyof ProfileFields, val: string) => {
    setValues((prev) => ({ ...prev, [key]: val }));
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isDirty || isSaving) return;

    if (!values.fullName.trim()) {
      toast.error("Full name cannot be empty.");
      return;
    }

    setIsSaving(true);
    try {
      const updatedUser = await updateUserProfile({
        name: values.fullName.trim(),
        phone: values.phone.trim() || null,
        college: values.college.trim() || null,
        degree: values.degree.trim() || null,
        gradYear: values.gradYear.trim() || null,
        city: values.city.trim() || null,
        state: values.state.trim() || null,
        country: values.country.trim() || null,
        linkedin: values.linkedin.trim() || null,
        github: values.github.trim() || null,
      });

      setUser(updatedUser);
      setSaved(values);
      toast.success("Profile updated successfully! 🎉", {
        description: "Your changes have been saved to your account.",
      });
    } catch (err: any) {
      toast.error(err.message || "Failed to update profile. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    setValues(saved);
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8 min-h-screen">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          My Profile
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Manage your personal details, academic background, and hiring preferences.
        </p>
      </div>

      <Card className="p-6 sm:p-8 border border-border shadow-sm">
        {/* User Identity Header Card */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-border pb-6">
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20 border border-border shadow-inner">
              {user?.avatarUrl && (
                <AvatarImage src={user.avatarUrl} alt={values.fullName || user.name || "Student"} />
              )}
              <AvatarFallback className="bg-primary/10 text-2xl font-bold text-primary">
                {getInitials(values.fullName || user?.name)}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-foreground">
                  {values.fullName || user?.name || "Student"}
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-primary/10 text-primary border border-primary/20 uppercase tracking-wider">
                  {user?.role || "STUDENT"}
                </span>
              </div>
              <div className="text-sm text-muted-foreground mt-0.5">{user?.email}</div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-lg border border-border/50">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>Profile active on database</span>
          </div>
        </div>

        {/* Dynamic Form Sections */}
        <form onSubmit={handleSave} className="mt-6 space-y-8">
          {fieldGroups.map((group) => (
            <section key={group.title} className="space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                {group.title}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {group.fields.map((f) => (
                  <div key={f.key} className="space-y-1.5">
                    <Label htmlFor={f.key} className="text-xs font-medium text-foreground">
                      {f.label}
                    </Label>
                    <Input
                      id={f.key}
                      type={f.type ?? "text"}
                      placeholder={f.placeholder}
                      value={values[f.key]}
                      disabled={f.readOnly}
                      readOnly={f.readOnly}
                      onChange={(e) => handleFieldChange(f.key, e.target.value)}
                      className={f.readOnly ? "bg-muted/50 cursor-not-allowed opacity-80" : ""}
                    />
                    {f.hint && (
                      <p className="text-[11px] text-muted-foreground">{f.hint}</p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Form Actions Ribbon */}
          <div className="mt-8 flex items-center justify-end gap-3 border-t border-border pt-6">
            <Button 
              type="button" 
              variant="ghost" 
              onClick={handleCancel} 
              disabled={!isDirty || isSaving}
            >
              Discard Changes
            </Button>
            <Button 
              type="submit" 
              disabled={!isDirty || isSaving}
              className="min-w-[130px] shadow-sm font-medium"
            >
              {isSaving ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                  Save Changes
                </>
              )}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
