import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { UserListComponent } from './users/user-list/user-list.component';
import { LikesComponent } from './likes/likes.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './guards/auth.guard';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserDetailResolver } from './resolvers/user-detail.resolver';
import { UserListResolver } from './resolvers/user-listl.resolver';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserEditResolver } from './resolvers/user-edit.resolver';
import { PreventUnsavedChanges } from './guards/prevent-unsaved-changes.guard';
import { LikesResolver } from './resolvers/likes.resolver';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: '', runGuardsAndResolvers: 'always', canActivate: [AuthGuard],
    children: [
        { path: 'users', component: UserListComponent,  resolve: {user: UserListResolver}},
        { path: 'users/:id', component: UserDetailComponent, resolve: {user: UserDetailResolver}},
        { path: 'user/edit', component: UserEditComponent,
                             resolve: {user: UserEditResolver},
                            canDeactivate: [PreventUnsavedChanges]},
        { path: 'likes', component: LikesComponent,
                         resolve: {users: LikesResolver}},
        { path: 'messages', component: MessagesComponent},
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full'},
];
