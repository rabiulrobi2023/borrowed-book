const borrowBook = {
    email, userName, bookName, category, bookImage, borrowQuantity, date, authorName
}
axiosGeneral.post(borrowUrl, borrowBook)
    .then(res => {
        console.log(res.data)
    })



bookName
"Fortress of the Muslim"
quantity
3
authorName
"Sa'id bin Wahf Al-Qahtani"
description
"A comprehensive collection of authentic supplications and prayers from…"
category
"Islamic"
rating
5
bookImage
"https://i.ibb.co/KmBgVC0/Fortress-of-the-Muslim.jpg"