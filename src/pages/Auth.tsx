
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, Key } from "lucide-react";

export default function Auth() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#F1F0FB] to-[#E5DEFF] px-2">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-semibold tracking-tight">
            Bienvenido
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <Label htmlFor="login-email" className="flex gap-2 items-center">
                <Mail size={16} />
                Correo electrónico
              </Label>
              <Input
                id="login-email"
                type="email"
                placeholder="tucorreo@email.com"
                autoComplete="email"
                disabled={isLoading}
                required
              />
            </div>
            <div>
              <Label htmlFor="login-password" className="flex gap-2 items-center">
                <Key size={16} />
                Contraseña
              </Label>
              <Input
                id="login-password"
                type="password"
                placeholder="••••••••"
                autoComplete="current-password"
                disabled={isLoading}
                required
              />
            </div>
            <Button type="submit" className="w-full mt-4" disabled={isLoading}>
              {isLoading ? "Iniciando..." : "Iniciar sesión"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
