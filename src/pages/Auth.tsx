
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Mail, Key, User } from "lucide-react";

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
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="w-full grid grid-cols-2 mb-6">
              <TabsTrigger value="login" className="w-full">
                Iniciar sesión
              </TabsTrigger>
              <TabsTrigger value="register" className="w-full">
                Registrarse
              </TabsTrigger>
            </TabsList>
            <TabsContent value="login">
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
            </TabsContent>
            <TabsContent value="register">
              <form className="space-y-4">
                <div>
                  <Label htmlFor="register-name" className="flex gap-2 items-center">
                    <User size={16} />
                    Nombre
                  </Label>
                  <Input
                    id="register-name"
                    placeholder="Tu nombre"
                    autoComplete="name"
                    disabled={isLoading}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="register-email" className="flex gap-2 items-center">
                    <Mail size={16} />
                    Correo electrónico
                  </Label>
                  <Input
                    id="register-email"
                    type="email"
                    placeholder="tucorreo@email.com"
                    autoComplete="email"
                    disabled={isLoading}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="register-password" className="flex gap-2 items-center">
                    <Key size={16} />
                    Contraseña
                  </Label>
                  <Input
                    id="register-password"
                    type="password"
                    placeholder="Crea una contraseña"
                    autoComplete="new-password"
                    disabled={isLoading}
                    required
                  />
                </div>
                <Button type="submit" className="w-full mt-4" disabled={isLoading}>
                  {isLoading ? "Registrando..." : "Registrarse"}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
