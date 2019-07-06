export interface SideMenuNavItem {
    displayName: string;
    disabled?: boolean;
    iconName?: string;
    route?: string;
    children?: SideMenuNavItem[];
}
