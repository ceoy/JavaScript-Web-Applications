import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CatalogComponent } from "./catalog/catalog.component";
import { CustomerDetailsComponent } from "./customer-details/customer-details.component";
import { OrderSummaryComponent } from './order-summary/order-summary.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "catalog", component: CatalogComponent },
  { path: "customer-details", component: CustomerDetailsComponent },
  { path: "order-summary", component: OrderSummaryComponent },
  { path: "**", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
