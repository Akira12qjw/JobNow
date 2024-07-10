import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { BsModalService } from "ngx-bootstrap/modal";
import { PageChangedEvent } from "ngx-bootstrap/pagination";
import { Ng2IzitoastService } from "ng2-izitoast";
// import { MatPaginator } from "@angular/material/paginator";
// import { PageEvent } from "@angular/material/paginator";

// import { log } from "console";

@Component({
  selector: "app-members",
  templateUrl: "./members.component.html",
  styleUrls: ["./members.component.css"],
})
export class MembersComponent implements OnInit {
  // @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  address: string;
  email: string;
  fullName: string;
  total: number;
  userId: number;
  userName: string;

  tutorials: any;
  currentTutorial = null;
  currentIndex = -1;

  page = 1;
  count = 0;
  pageSize = 25;
  pageSizes = [10, 15, 20, 25];

  constructor(
    private auth: AuthService,
    private iziToast: Ng2IzitoastService
  ) {}

  ngOnInit() {
    this.retrieveTutorials();
  }

  // getRequestParams(offset, limit): any {
  //   // tslint:disable-next-line:prefer-const
  //   let params = {};

  //   if (offset) {
  //     params[`offset`] = offset - 1;
  //   }

  //   if (limit) {
  //     params[`limit`] = limit;
  //   }

  //   return params;
  // }
  getRequestParams(page: number, pageSize: number): any {
    let params = {};
    params["offset"] = (page - 1) * pageSize;
    params["limit"] = pageSize;
    console.log("Params:", params); // Thêm log này để kiểm tra
    return params;
  }
  // retrieveTutorials(): void {
  //   const params = this.getRequestParams(this.page, this.pageSize);

  //   this.auth.getAll(params).subscribe(
  //     (data) => {
  //       // console.log(data.data.content);

  //       this.tutorials = data.data.content;
  //       this.count = data.data.totalElements;
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   );
  // }
  retrieveTutorials(): void {
    const params = this.getRequestParams(this.page, this.pageSize);
    this.auth.getAll(params).subscribe(
      (response) => {
        console.log("API Response:", response);
        if (response.data && response.data.content) {
          this.tutorials = response.data.content;
          this.count = response.data.totalElements;
          console.log("Updated tutorials:", this.tutorials);
        } else {
          console.error("Unexpected API response structure:", response);
        }
      },
      (error) => {
        console.error("Error:", error);
      }
    );
  }
  // handlePageChange(event): void {
  //   this.page = event;
  //   this.retrieveTutorials();
  // }

  // handlePageSizeChange(event): void {
  //   this.pageSize = event.target.value;
  //   this.page = 2;
  //   this.retrieveTutorials();
  // }
  handlePageChange(event: number): void {
    this.page = event;
    this.retrieveTutorials();
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = parseInt(event.target.value, 10);
    this.page = 1;
    console.log("Page size changed to:", this.pageSize);
    this.retrieveTutorials();
  }

  getPagesArray(): number[] {
    const pageCount = this.getPageCount();
    return Array.from({ length: pageCount }, (_, i) => i + 1);
  }

  getPageCount(): number {
    return Math.ceil(this.count / this.pageSize);
  }

  detail(data) {
    this.address = data.address;
    this.email = data.email;
    this.fullName = data.fullName;
    this.total = data.total;
    this.userId = data.userId;
    this.userName = data.userName;
  }

  blockUser(id) {
    this.auth.changeStatus(id, 1).subscribe((et) => {
      this.iziToast.success({
        title: "Chặn người dùng!",
        message: "Chặn người dùng thàng công!",
        position: "topRight",
      });
      this.retrieveTutorials();
    });
  }

  unBlock(id) {
    this.auth.changeStatus(id, 0).subscribe((et) => {
      this.iziToast.success({
        title: "Mở chặn người dùng!",
        message: "Mở chặn người dùng thàng công!",
        position: "topRight",
      });
      this.retrieveTutorials();
    });
  }
}
