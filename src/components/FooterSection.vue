<template>
  <div class="container footer-wrapper d-flex justify-content-between">

    <div class="wrapper-logo">
      <img src="@/assets/Logo-black.svg" alt="logo">
      <div class="text">Social media validation business model canvas graphical user interface launch party creative
        facebook iPad twitter.</div>
      <div class="subtitle-logo">All rights reserved.</div>
    </div>

    <div class="wrapper-titles d-flex justify-content-between">

      <div class="wrapper-item" v-for="(menu,ind) in $options.menus" :key="ind">
        <div class="title">{{menu.title}}</div>
        <div class="link" v-for="(link,index) in menu.links" :key="index" >
          <router-link :to="link.path">{{ link.name }}</router-link>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
const menus = [
  {
    title: 'Landings',
    links: [
      {
        name: 'Home',
        path: '/home'
      },
      {
        name: 'Products',
        path: '/products'
      },
      {
        name: 'Services',
        path: '/services'
      }
    ],
  },
  {
    title: 'Company',
    links: [
      {
        name: 'Home',
        path: '/home'
      },
      {
        name: 'Careers',
        path: '/Careers'
      },
      {
        name: 'Services',
        path: '/services'
      }
    ],
  },
  {
    title: 'Resources',
    links: [
      {
        name: 'Blog',
        path: '/Blog'
      },
      {
        name: 'Products',
        path: '/products'
      },
      {
        name: 'Services',
        path: '/services'
      }
    ],
  }
];

export default {
  name: 'FooterSection',
  menus
}
</script>

<style scoped>
.footer-wrapper {
  margin-top: 84px;
  padding: 100px 79px 100px 0;
}

.wrapper-logo {
  width: calc(35% - 80px);
  font-family: 'Open Sans';
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: #777777;
}
.text {
  margin-top: 40px;
  margin-bottom: 64px;
}

.wrapper-titles {
  width: calc(65% - 80px);
  font-family: 'Open Sans';
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  color: #777777;
}

.title {
  font-weight: 700;
  color: #000;
}
.link {
  margin-top: 32px;
}
.link a {
  text-decoration: none;
  color: #777777;
}

</style>