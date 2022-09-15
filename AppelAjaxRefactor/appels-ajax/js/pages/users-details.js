import { UserDetailsRendu } from "../components/user-detail-rendu.js";
import { UserRow } from "../components/user-row.js";
import { UsersService } from "../services/users.service.js";
import { getParams } from "../utils/get-param.js";


class UsersDetails{
  constructor(){
    this.user={};
    this.userService = new UsersService();
    this.$userDetails = document.querySelector("#user-details");
    this.id = getParams('id');
    console.log('id:',this.id);
  }

  async render() {
    this.user = await this.userService.fetchUserById(this.id);
    const row = UserDetailsRendu(this.user);
    this.$userDetails.appendChild(row);
    
  }
}

const userDetails = new UsersDetails();
userDetails.render();


