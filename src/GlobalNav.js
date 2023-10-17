export default function GlobalNav() {
    return (
        <header className="globalnav-wrapper">
            <nav className="globalnav">
                <GlobalNavMenu />
                <GlobalNavSubmenu />
            </nav>
        </header>
    );
}

function GlobalNavMenu() {
    return (
        <ul className="globalnav-menu">
            <GlobalNavMenuItem href="/">asdf</GlobalNavMenuItem>
            <GlobalNavMenuItem href="/">아이템2</GlobalNavMenuItem>
            <GlobalNavMenuItem href="/">ㅁㄴㅇㄹ</GlobalNavMenuItem>
        </ul>
    );
}

function GlobalNavMenuItem({ children, href }) {
    return (
        <li className="globalnav-menu-item"><a href={href}><span>{children}</span></a> </li>
    );
}

function GlobalNavSubmenu() {
    return (
        <ul className="globalnav-submenu">
            <GlobalNavSubmenuItem>
                <img src="https://storage.surfit.io/user/avatar/1057223318.png" alt=""/>
            </GlobalNavSubmenuItem>
        </ul>
    );
}

function GlobalNavSubmenuItem({ children }) {
    return (
        <li className="globalnav-submenu-item">{children}</li>
    );
}