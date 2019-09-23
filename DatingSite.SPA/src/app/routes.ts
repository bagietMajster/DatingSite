import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { UserListComponent } from './users/user-list/user-list.component';
import { LikesComponent } from './likes/likes.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './guards/auth.guard';
import { UserDetailComponent } from './users/user-detail/user-detail.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: '', runGuardsAndResolvers: 'always', canActivate: [AuthGuard],
    children: [
        { path: 'users', component: UserListComponent},
        { path: 'users/:id', component: UserDetailComponent},
        { path: 'likes', component: LikesComponent},
        { path: 'messages', component: MessagesComponent},
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full'},
];
