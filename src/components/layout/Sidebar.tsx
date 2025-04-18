
import React, { useState } from 'react';
import { 
  HomeIcon, 
  Building2Icon, 
  Users2Icon,

  CalendarIcon, 
  ListTodoIcon, 
  FileTextIcon, 
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
  const [activeItem, setActiveItem] = useState('Alojamientos');

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
        {!collapsed && <span className="text-lg font-semibold">Dashboard</span>}
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
                label="Dashboard"
                active={activeItem === 'Dashboard'}
                onClick={() => handleItemClick('Dashboard')}
              />
              <SidebarItem
                icon={Building2Icon}
                label="Alojamientos"
                active={activeItem === 'Alojamientos'}
                onClick={() => handleItemClick('Alojamientos')}
              />
              <SidebarItem
                icon={Users2Icon}
                label="Titulares"
                active={activeItem === 'Titulares'}
                onClick={() => handleItemClick('Titulares')}
              />
              <SidebarItem
                icon={CalendarIcon}
                label="Calendario"
                active={activeItem === 'Calendario'}
                onClick={() => handleItemClick('Calendario')}
              />
              <SidebarItem
                icon={ListTodoIcon}
                label="Inspecciones"
                active={activeItem === 'Inspecciones'}
                onClick={() => handleItemClick('Inspecciones')}
              />
              <SidebarItem
                icon={FileTextIcon}
                label="Informes"
                active={activeItem === 'Informes'}
                onClick={() => handleItemClick('Informes')}
              />
              <SidebarItem
                icon={SettingsIcon}
                label="Configuración"
                active={activeItem === 'Configuración'}
                onClick={() => handleItemClick('Configuración')}
              />
            </>
          ) : (
            <>
              <Button
                variant="ghost"
                className={cn(
                  "h-10 w-10 p-0",
                  activeItem === 'Dashboard' && "bg-sidebar-accent text-sidebar-accent-foreground"
                )}
                onClick={() => handleItemClick('Dashboard')}
              >
                <HomeIcon size={18} />
              </Button>
              <Button
                variant="ghost"
                className={cn(
                  "h-10 w-10 p-0",
                  activeItem === 'Alojamientos' && "bg-sidebar-accent text-sidebar-accent-foreground"
                )}
                onClick={() => handleItemClick('Alojamientos')}
              >
                <Building2Icon size={18} />
              </Button>
              <Button
                variant="ghost"
                className={cn(
                  "h-10 w-10 p-0",
                  activeItem === 'Titulares' && "bg-sidebar-accent text-sidebar-accent-foreground"
                )}
                onClick={() => handleItemClick('Titulares')}
              >
                <Users2Icon size={18} />
              </Button>
              <Button
                variant="ghost"
                className={cn(
                  "h-10 w-10 p-0",
                  activeItem === 'Calendario' && "bg-sidebar-accent text-sidebar-accent-foreground"
                )}
                onClick={() => handleItemClick('Calendario')}
              >
                <CalendarIcon size={18} />
              </Button>
              <Button
                variant="ghost"
                className={cn(
                  "h-10 w-10 p-0",
                  activeItem === 'Inspecciones' && "bg-sidebar-accent text-sidebar-accent-foreground"
                )}
                onClick={() => handleItemClick('Inspecciones')}
              >
                <ListTodoIcon size={18} />
              </Button>
              <Button
                variant="ghost"
                className={cn(
                  "h-10 w-10 p-0",
                  activeItem === 'Informes' && "bg-sidebar-accent text-sidebar-accent-foreground"
                )}
                onClick={() => handleItemClick('Informes')}
              >
                <FileTextIcon size={18} />
              </Button>
              <Button
                variant="ghost"
                className={cn(
                  "h-10 w-10 p-0",
                  activeItem === 'Configuración' && "bg-sidebar-accent text-sidebar-accent-foreground"
                )}
                onClick={() => handleItemClick('Configuración')}
              >
                <SettingsIcon size={18} />
              </Button>
            </>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
