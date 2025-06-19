const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'Fayzulla Abdullayev',
    position: 'Cyber Security ',
    photo:
      'https://media.licdn.com/dms/image/v2/D4D03AQH6_LH1L9cMeg/profile-displayphoto-shrink_200_200/B4DZTu1ZWMHIAY-/0/1739173762856?e=2147483647&v=beta&t=TALR-nn7-va71xh505yfaIG0YG40pK2S3vNHcK8tmx0',
    text:
      "Dasturlashni o‘rganish mening orzuyim edi, lekin nimadan boshlashni bilmasdim. Bu kurs menga aniq yo‘l-yo‘riq va zarur bilimlarni berdi. Har bir mavzu sodda tilda, tushunarli tarzda yoritilgan. Amaliy mashqlar orqali bilimlarim mustahkam bo‘ldi. Kod yozish endi mening sevimli mashg‘ulotimga aylangan. O‘zimni haqiqiy dasturchi sifatida tasavvur qilishdan to‘xtamayapman.",
  },
  {
    name: 'Abdurahmon Karimov',
    position: 'Back End Developer',
    photo: 'https://stateofdev.uz/images/video-cover-v2.png?v=3.0',
    text:
      'Dasturchilikka qadam qo‘yganimda juda ko‘p savollarim bor edi. Bu darslar orqali ularning barchasiga javob topdim. Har bir modul menda yangi ko‘nikma va ishonch uyg‘otdi. Real loyihalarda ishlay olishim uchun zarur poydevor yaratildi. Endi o‘z loyihalarimni yaratmoqdaman. Bu men uchun katta yutuq va yangi hayot bosqichi.',
  },
  {
    name: 'Faxriddin Jumaniyozov',
    position: 'Back End Project Manager',
    photo: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Ftalent%2F1019150%2Fpicture%2Foptimized%2Fhuge_ed04aadcccff9b1b06d55201134e080d-ff6273bc07a9370e2698fa27d1cd3876.jpg&width=480',
    text:
      "Avval dasturlashni faqat matematikani yaxshi biladiganlar uchun deb o‘ylardim. Ammo bu kurs bu fikrimni butunlay o‘zgartirdi. Hamma narsa tushunarli, bosqichma-bosqich va juda amaliy tarzda o‘rgatilgan. O‘zim mustaqil ishlay olish darajasiga yetdim. Endi doimiy ravishda yangi texnologiyalarni sinab ko‘rayapman. Dasturchilikni o‘rganmoqchi bo‘lgan har kimga tavsiya qilaman.",
  },
  {
    name: 'Shoxrux Azizov',
    position: 'Front End Developer',
    photo: 'https://media.licdn.com/dms/image/v2/C4D03AQEg5-vnPw7PvA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1663581392790?e=2147483647&v=beta&t=emzGHPcvmdHjgy8jG9c-Q2Bj-2u1sFxk4y9LKnvI6-4',
    text:
      "Har kuni yangi narsa o‘rganish — bu kursning eng yaxshi tomoni. Dasturlashni o‘rganish faqat nazariya emas, balki ko‘p amaliyot ham ekan. Ustozlar yordami bilan qiyinchiliklarni yengib o‘tdim. Endi har bir muammoni kod orqali hal qilishga harakat qilaman. O‘zimni IT olamiga kirganimni his qilyapman. Bu tajriba menga katta ishonch berdi.",
  },
  {
    name: 'Asilbek Suvonov',
    position: 'Front End Developer',
    photo: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Ftalent%2F123331%2Fpicture%2Foptimized%2Fhuge_0e78ee42316106abfd3f80fa5e9ecf4a-1c363500cc0d5e5ed4f31b62c0ba764d.jpg&width=480',
    text:
      "Menga bu kursning eng yoqqan jihati — amaliyotga alohida e’tibor berilganidir. Nazariyani darhol kod orqali sinab ko‘ramiz. Darslar zamonaviy uslubda va foydali maslahatlar bilan boyitilgan. Har bir moduldan so‘ng o‘zgarayotganimni sezdim. Endi HTML, CSS va JavaScript bilan kichik saytlar yarataman. Bu dastlab orzu edi, endi esa haqiqat.",
  },
  {
    name: 'Miraziz Rahmonov',
    position: 'Front End Developer',
    photo:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGttGKeaSS2EhNcfaUeljTr4M-tHyyUGA79ZArViz7VNTZuV0AOb1rMDKfV5YHYFDTwOM&usqp=CAU',
    text:
      'Dasturlashda oldin ko‘p urindim, lekin yo‘limni yo‘qotardim. Bu safar esa puxta tuzilgan o‘quv dasturi yordam berdi. Har bir dars motivatsiyamni oshirdi va bilimimni chuqurlashtirdi. Avval murakkab tuyulgan tushunchalar endi oson ko‘rinadi. Loyihalar qilishni o‘rganish — eng yaxshi tajriba bo‘ldi. Endi o‘zimni IT sohasida tasavvur qilishim mumkin.',
  },
  {
    name: 'Faida Ismoilova',
    position: 'Graphic Designer',
    photo: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Ftalent%2F928514%2Fpicture%2Foptimized%2Fhuge_2b78910a2adf5d74efa2c098f585a421-8e2b3c9e3c460503366fb0fc02e17f53.jpg&width=480',
    text:
      'Bu kurs hayotimni o‘zgartirdi, desam xato bo‘lmaydi. Oddiy bilimdan boshlab, real loyihalar yaratishgacha yetib keldim. O‘qituvchilarning yondashuvi, metodikasi juda yaxshi. Kod yozish va muammolarni hal qilishga o‘rganib qoldim. Endi har kuni o‘z ustimda ishlayman va yangi narsalarni o‘rganaman. Bu yo‘lni tanlaganimdan xursandman.',
  },
]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)
