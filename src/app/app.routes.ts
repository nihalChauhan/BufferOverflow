import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
// import { ArticleComponent } from './components/article/article.component';
// import { GlobalFeedComponent } from './components/global-feed/global-feed.component';
// import { TagFeedComponent } from './components/tag-feed/tag-feed.component';
// import { UserFeedComponent } from './components/user-feed/user-feed.component';
// import { AddArticleComponent } from './components/add-article/add-article.component';
// import { ProfileComponent } from './components/profile/profile.component';
// import { AuthGuard } from './guards/auth.guard';
// import { EditArticleComponent } from './components/edit-article/edit-article.component';

const appRoutes: Routes = [
    // {
    //     path: 'home',
    //     component: HomeComponent,
    //     children: [
    //         {path: '', component: GlobalFeedComponent},
    //         {path: 'tag', component: TagFeedComponent},
    //         {path: 'feed', component: UserFeedComponent}
    //     ]
    // },
    { path: 'home', component: HomeComponent },
    // { path: 'profile', component: ProfileComponent },
    // { path: 'new', component: AddArticleComponent, canActivate: [AuthGuard] },
    // { path: 'edit', component: EditArticleComponent, canActivate: [AuthGuard] },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: 'home' }
];

export const routes = RouterModule.forRoot(appRoutes);
