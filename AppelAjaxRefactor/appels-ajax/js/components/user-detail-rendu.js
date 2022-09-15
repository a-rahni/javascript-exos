
export function UserDetailsRendu(user){
    const $userDetail = document.createElement("p");
    $userDetail.innerHTML = `
        <h1>${user.id} - ${user.name}</h1>
     <p>${user.email}</p>
      <p>${user.phone}</p>
      `;
      
      return $userDetail;
  }