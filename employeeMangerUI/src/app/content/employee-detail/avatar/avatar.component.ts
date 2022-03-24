import { Component, OnInit } from '@angular/core';
import { GetAnEmployeeService, UploadEmployeeImageService} from '../../../../service/employee.service'
import { Employee } from '../../../../model/employee.model'

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  employeeId = window.location.href.split("/")[4];
  employee: Employee = new Employee();
  image: File;
  constructor(
    private getAnEmployeeService: GetAnEmployeeService,
    private uploadEmployeeImageService: UploadEmployeeImageService,
  ) { }

  ngOnInit(): void {
    this.employee.avatar = "default.jpg"
    this.getAnEmployee();
  }

  getAnEmployee() {
    this.getAnEmployeeService.setId(Number(this.employeeId));
    this.getAnEmployeeService.getAnEmployee().subscribe((res: any) => {
      this.employee = res;
      if (this.employee.avatar=="") {
        this.employee.avatar = "default.jpg"
      }
    })
  }

  onFileChanged (image) {
    this.image = image.target.files[0];
    console.log(this.image)
  }

  uploadImage() {
    this.uploadEmployeeImageService.setEmployeeId(this.employee.id);
    this.uploadEmployeeImageService.setImage(this.image)
    this.uploadEmployeeImageService.uploadEmployeeImage().subscribe((res: any)=>
    {
      console.warn();
      alert("success!");
      window.location.reload();
    })
  }
}
