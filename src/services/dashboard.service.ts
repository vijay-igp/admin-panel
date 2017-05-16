import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {
    
    constructor() { }

    getMasterData() {
        return {
            displayStatuses: ["New Orders", "Confirmed", "Out for delivery", "Delivered orders"],
            statuses: ["new", "confirmed", "ofd", "delivered"],
            deliveryTimes: ["today", "tomorrow", "future", "bydate"]
        }
    }
    
    getDashboardData() {
        return {
            "new": {
                "today": {
                    ordersCount: 7,
                    displayStr: 'Take action',
                    isAlert: true
                },
                "tomorrow": {
                    ordersCount: 0,
                    displayStr: 'View Orders',
                    isAlert: false
                },
                "future": {
                    ordersCount: 15,
                    displayStr: 'View Orders',
                    isAlert: false
                },
                "bydate": {
                    ordersCount: 5,
                    displayStr: 'View Orders',
                    isAlert: false
                }
            },
            "confirmed": {
                "today": {
                    ordersCount: 7,
                    displayStr: 'View Orders',
                    isAlert: false
                },
                "tomorrow": {
                    ordersCount: 0,
                    displayStr: 'View Orders',
                    isAlert: false
                },
                "future": {
                    ordersCount: 15,
                    displayStr: 'View Orders',
                    isAlert: false
                },
                "bydate": {
                    ordersCount: 5,
                    displayStr: 'View Orders',
                    isAlert: false
                }
            },
            "delivered": {
                today: 6,
                total: 10,
                isAlert: false
            }
        };
    }
    
}
