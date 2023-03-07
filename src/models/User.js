const DEFAULT_IMG_URL =
  'https://firebasestorage.googleapis.com/v0/b/chmdp-foodie.appspot.com/o/users%2Fdefault-user.png?alt=media&token=b3f01d79-5459-4fe2-9b8e-de2af13b5ea7'

class User {
  constructor(fullName, email, phone) {
    this.fullName = fullName
    this.email = email
    this.phone = phone
    this.imgUrl = DEFAULT_IMG_URL
    this.favoriteRestaurants = []
    this.addresses = []
  }
}

export default User
