import { HomeComponent } from './pages/home/home.component';
import { Routes } from '@angular/router';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { DefaultLayoutComponent } from './components/default-layout/default-layout.component';
import { CartComponent } from './pages/cart/cart.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { RefundPolicyComponent } from './pages/refund-policy/refund-policy.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { CollectionsComponent } from './pages/collections/collections.component';
import { CollectionsResultComponent } from './pages/collections-result/collections-result.component';
import { SearchResultComponent } from './pages/search-result/search-result.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

export const routes: Routes = [
    {path: '',component: DefaultLayoutComponent, children:[
        {path: '', component: HomeComponent},
        {path: 'home',component: HomeComponent},
        {path: 'product-detail', component: ProductDetailComponent},
        {path: 'cart', component: CartComponent}, 
        {path: 'about',component: AboutComponent},
        {path: 'contact',component: ContactComponent},    
        {path: 'policies/refund-policy',component: RefundPolicyComponent},
        {path: 'policies/privacy-policy',component: PrivacyPolicyComponent},
        {path: 'collections',component: CollectionsComponent},
        {path: 'collections/:id',component: CollectionsResultComponent},
        {path: 'search/:keyword',component: SearchResultComponent},
        {path: 'login',component: LoginComponent},
        {path: 'sign-up',component: SignupComponent},
        {path: '404',component: NotfoundComponent},
        {path: '**',redirectTo: '404', pathMatch:'full'},
    ]},
    {path: 'checkout', component: CheckoutComponent}
];
