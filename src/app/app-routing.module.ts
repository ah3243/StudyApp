import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth-guard.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TopicSearchComponent } from './topicSearch/topicSearch.component';
import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TopicDetailComponent } from './topic-detail/topic-detail.component';
import { PaperComponent } from './paper/paper.component';

const appRoutes: Routes = [
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'topicSearch',
        component: TopicSearchComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'topicDetail/:id', component: TopicDetailComponent },
            { path: 'paper/:id', component: PaperComponent },
            { path: 'profile/:id', component: ProfileComponent },
            { path: '', component: TopicSearchComponent },
        ]
    },
    {
        path: '**', component: TopicSearchComponent, canActivate: [AuthGuard]
    }        
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{ };