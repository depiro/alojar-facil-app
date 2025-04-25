
import React, { useState } from 'react';
import { 
  HomeIcon, 
  FilePlusIcon, 
  FileMinusIcon,
  ImageIcon, 
  SettingsIcon,
  MenuIcon,
  XIcon
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

type SidebarItemProps = {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  onClick?: () => void;
};

const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, label, active, onClick }) => {
  return (
    <Button
      variant="ghost"
      className={cn(
        "w-full justify-start gap-2 px-3 py-2 text-sm font-medium",
        active
          ? "bg-sidebar-accent text-sidebar-accent-foreground"
          : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
      )}
      onClick={onClick}
    >
      <Icon size={18} />
      <span>{label}</span>
    </Button>
  );
};

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState('Inicio');

  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };

  return (
    <div
      className={cn(
        "flex h-screen flex-col border-r bg-sidebar transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex h-16 items-center justify-between border-b px-4">
        {!collapsed && <span className="text-lg font-semibold">Inicio</span>}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="ml-auto"
        >
          {collapsed ? <MenuIcon size={18} /> : <XIcon size={18} />}
        </Button>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid gap-1 px-2">
          {!collapsed ? (
            <>
              <SidebarItem
                icon={HomeIcon}
                label="Inicio"
                active={activeItem === 'Inicio'}
                onClick={() => handleItemClick('Inicio')}
              />
              <SidebarItem
                icon={FilePlusIcon}
                label="Nuevo Establecimiento"
                active={activeItem === 'Nuevo Establecimiento'}
                onClick={() => handleItemClick('Nuevo Establecimiento')}
              />
              <SidebarItem
                icon={FileMinusIcon}
                label="Baja Establecimiento"
                active={activeItem === 'Baja Establecimiento'}
                onClick={() => handleItemClick('Baja Establecimiento')}
              />
              <SidebarItem
                icon={ImageIcon}
                label="Muestras"
                active={activeItem === 'Muestras'}
                onClick={() => handleItemClick('Muestras')}
              />
          {/*     <SidebarItem
                icon={SettingsIcon}
                label="Configuración"
                active={activeItem === 'Configuración'}
                onClick={() => handleItemClick('Configuración')}
              /> */}
            </>
          ) : (
            <>
              <Button
                variant="ghost"
                className={cn(
                  "h-10 w-10 p-0",
                  activeItem === 'Inicio' && "bg-sidebar-accent text-sidebar-accent-foreground"
                )}
                onClick={() => handleItemClick('Inicio')}
              >
                <HomeIcon size={18} />
              </Button>
              <Button
                variant="ghost"
                className={cn(
                  "h-10 w-10 p-0",
                  activeItem === 'Nuevo Establecimiento' && "bg-sidebar-accent text-sidebar-accent-foreground"
                )}
                onClick={() => handleItemClick('Nuevo Establecimiento')}
              >
                <FilePlusIcon size={18} />
              </Button>
              <Button
                variant="ghost"
                className={cn(
                  "h-10 w-10 p-0",
                  activeItem === 'Baja Establecimiento' && "bg-sidebar-accent text-sidebar-accent-foreground"
                )}
                onClick={() => handleItemClick('Baja Establecimiento')}
              >
                <FileMinusIcon size={18} />
              </Button>
              <Button
                variant="ghost"
                className={cn(
                  "h-10 w-10 p-0",
                  activeItem === 'Muestras' && "bg-sidebar-accent text-sidebar-accent-foreground"
                )}
                onClick={() => handleItemClick('Muestras')}
              >
                <ImageIcon size={18} />
              </Button>
             {/*  <Button
                variant="ghost"
                className={cn(
                  "h-10 w-10 p-0",
                  activeItem === 'Configuración' && "bg-sidebar-accent text-sidebar-accent-foreground"
                )}
                onClick={() => handleItemClick('Configuración')}
              >
                <SettingsIcon size={18} />
              </Button> */}
            </>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
