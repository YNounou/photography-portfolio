import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: "", pathMatch: "full", loadComponent: () => import("./pages/home/home.component").then((m) => m.HomeComponent) },
    { path: "enrollment", loadComponent: () => import("./pages/enrollment/enrollment.component").then((c) => c.EnrollmentComponent) },
    { path: "gallerie", loadComponent: () => import("./pages/gallery/gallery.component").then((c) => c.GalleryComponent) },
    { path: "blog", loadComponent: () => import("./pages/blog/blog.component").then((c) => c.BlogComponent) },
    { path: "apropos", loadComponent: () => import("./pages/about/about.component").then((c) => c.AboutComponent) },
    { path: "contact", loadComponent: () => import("./pages/contact/contact.component").then((c) => c.ContactComponent) },
    { path: "**", loadComponent: () => import("./pages/404/404.component").then((c) => c.NotFoundComponent) },
];
