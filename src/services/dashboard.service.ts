import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {
    
    constructor() { }
    
    getDashboardData() {
        return {
            "new": {
                "today": {
                    ordersCount: 7,
                    displayStr: 'View Orders'
                },
                "tomorrow": {
                    ordersCount: 0,
                    displayStr: 'View Orders'
                },
                "future": {
                    ordersCount: 15,
                    displayStr: 'View Orders'
                },
                "bydate": {
                    ordersCount: 5,
                    displayStr: 'View Orders'
                }
            },
            "confirmed": {
                "today": {
                    ordersCount: 7,
                    displayStr: 'View Orders'
                },
                "tomorrow": {
                    ordersCount: 0,
                    displayStr: 'View Orders'
                },
                "future": {
                    ordersCount: 15,
                    displayStr: 'View Orders'
                },
                "bydate": {
                    ordersCount: 5,
                    displayStr: 'View Orders'
                }
            },
            "delivered": {
                today: 6,
                total: 10
            }
        };
    }
    
}
