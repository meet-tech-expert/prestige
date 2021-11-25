import axios from 'axios'
const admin_url = 'https://phsllc.supersites.io/'
const admin_email = 'xxxxx@xxxx.com'
const admin_password = 'xxxxxxxxxxxx'
import { Directus } from '@directus/sdk'
const directus = new Directus(admin_url)
const getDirectusToken = async () => {
  const token = directus.auth.token
  //console.log(directus.auth)
  try {
    if (token === null) {
      console.log('token is null')
      let res = await directus.auth.login({
        email: admin_email,
        password: admin_password,
      })
      console.log(res)
    } else if (directus.auth.expiring === true) {
      console.log('token is expired.')
      await this.refreshToken()
    }
    return directus.auth.token
  } catch (e) {
    console.log(e)
  }
}
const refreshToken = async () => {
  try {
    return await directus.auth.refresh()
  } catch (e) {
    console.log(e)
    //if auth refresh fails then login again
    let res = await directus.auth.login({
      email: admin_email,
      password: admin_password,
    })
    console.log(res)
  }
}
const getHomeData = async () => {
  console.log('Loading homeData')
  let token = await getDirectusToken()
  console.log(token)

  const homePage = await axios
    .get(admin_url + 'items/home_page/?fields=*.*&access_token=' + token)
    .then((res) => {
      return res.data.data
    })
  const slider = await axios
    .get(admin_url + 'items/slider?access_token=' + token)
    .then((res) => {
      return res.data.data
    })
  const workData = await axios
    .get(
      admin_url +
      'items/albums/?fields=*.*&sort=sort&filter[status][_eq]=published&filter[gallery][_not]=[]&access_token=' +
      token
    )
    .then((res) => {
      return res.data.data
    })
  const projects = await axios
    .get(
      admin_url +
      'items/projects/?fields=*.*,category.*.*&sort=sort&filter[status][_eq]=published&access_token=' +
      token
    )
    .then((res) => {
      return res.data.data
    })
  const features = await axios
    .get(
      admin_url +
      'items/features/?fields=title,description,image&sort=sort&filter[status][_eq]=published&access_token=' +
      token
    )
    .then((res) => {
      return res.data.data
    })
  const brands = await axios
    .get(
      admin_url +
      'items/brands/?fields=name,image&sort=sort&filter[status][_eq]=published&access_token=' +
      token
    )
    .then((res) => {
      return res.data.data
    })
  const news = await axios
    .get(
      admin_url +
      'items/blogs/?fields=id,title,slug,image,publish_on&limit=2&sort=-publish_on&filter[status][_eq]=published&access_token=' +
      token
    )
    .then((res) => {
      return res.data.data
    })

  return {
    homePage,
    slider,
    workData,
    projects,
    features,
    brands,
    news,
  }
}
const getServicesPage = async () => {
  console.log('Loading getServicesPage')
  let token = await getDirectusToken()
  const servicesData = await axios
    .get(admin_url + 'items/services_page/?fields=*.*&access_token=' + token)
    .then((res) => {
      return res.data.data
    })
  const services = await axios
    .get(
      admin_url +
      'items/services/?sort=sort&filter[status][_eq]=published&access_token=' +
      token
    )
    .then((res) => {
      return res.data.data
    })
  return {
    servicesData,
    services,
  }
}
const getAboutPage = async () => {
  console.log('Loading getAboutPage')
  let token = await getDirectusToken()
  const aboutData = await axios
    .get(admin_url + 'items/about_page/?fields=*.*&access_token=' + token)
    .then((res) => {
      return res.data.data
    })


  const teamsData = await axios
    .get(
      admin_url +
      'items/teams/?filter[status][_eq]=published&sort=date_created&access_token=' +
      token
    )
    .then((res) => {
      return res.data.data
    })

  // const reviewsData = await axios({
  //   method: 'get',
  //   url: 'https://www.homeadvisor.com/sm/reviews/86608635?page=1&sort=newest&pageSize=9999',
  //   headers: {
  //     'User-Agent':
  //       'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
  //     Cookie:
  //       'cookiesEnabled=1; JSESSIONID=6D3EC25C286DA1E1D29A5DC3753E8E2F.pu020con007-1; aff_track=2|*|23116563|*|0; originatingSessionID=1626468475263pu020con0076D3EC25C286DA1E1D29A5DC3753E8E2F.pu020con007-1; csacn=746971; csdcn=1626468475263; psacn=""; psdcn=0; sess_log=1626468475263pu020con0076D3EC25C286DA1E1D29A5DC3753E8E2F.pu020con007-1; __cflb=0H28vcAZaTP4ptpqrBQhadf3Xk9Hcfwjfjo3PXd8vh1',
  //   },
  // }).then((res) => {
  //   return res.data.ratings
  // })

  return {
    aboutData,
    teamsData,
    // reviewsData,
  }
}
const getBlogPage = async () => {
  console.log('Loading getBlogPage')
  let token = await getDirectusToken()
  const blogData = await axios
    .get(admin_url + 'items/blog_page/?fields=*.*&access_token=' + token)
    .then((res) => {
      return res.data.data
    })
  const blogs = await axios
    .get(
      admin_url +
      'items/blogs/?fields=*,seo.*&sort=-publish_on&filter[status][_eq]=published&access_token=' +
      token
    )
    .then((res) => {
      return res.data.data
    })
  return {
    blogData,
    blogs,
  }
}
const getCareerPage = async () => {
  console.log('Loading getCareerPage')
  let token = await getDirectusToken()
  const careerData = await axios
    .get(admin_url + 'items/careers_page/?fields=*.*&access_token=' + token)
    .then((res) => {
      return res.data.data
    })
  const jobs = await axios
    .get(admin_url + 'items/jobs/?filter[status][_eq]=published&access_token=' + token)
    .then((res) => {
      return res.data.data
    })
  return {
    careerData,
    jobs,
  }
}
const getContactPage = async () => {
  console.log('Loading getContactPage')
  let token = await getDirectusToken()
  return await axios
    .get(admin_url + 'items/contact_page/?fields=*.*&access_token=' + token)
    .then((res) => {
      return res.data.data
    })
}
const getFooter = async () => {
  console.log('Loading getFooter')
  let token = await getDirectusToken()
  return await axios
    .get(admin_url + 'items/footer?access_token=' + token)
    .then((res) => {
      return res.data.data
    })
}
const getHeader = async () => {
  console.log('Loading getHeader')
  let token = await getDirectusToken()
  return await axios
    .get(admin_url + 'items/header?access_token=' + token)
    .then((res) => {
      return res.data.data
    })
}
const getSEOSettings = async () => {
  console.log('Loading getSEOSettings')
  let token = await getDirectusToken()
  return await axios
    .get(admin_url + 'items/seo_settings?access_token=' + token)
    .then((res) => {
      return res.data.data
    })
}
export default async () => {
  return {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
      title: 'Prestige Home Solutions',
      titleTemplate: '%s | Prestige Home Solutions', 
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'robots', content: 'noindex, nofollow' },
        { name: 'msapplication-TileImage', content: 'favicon.png' },
      ],
      link: [
        {
          rel: 'stylesheet',
          type: 'text/css',
          href: '//fonts.googleapis.com/css?family=Lato:400,700%7CPoppins:300,400,500,600,700',
        },
        { type: 'image/png', sizes: '16x16', href: 'favicon.png' },
        { type: 'image/png', sizes: '32x32', href: 'favicon.png' },
        { type: 'image/png', sizes: '96x96', href: 'favicon.png' },
        {
          rel: 'apple-touch-icon-precomposed',
          type: 'image/png',
          sizes: '76x76',
          href: 'favicon.png',
        },
        {
          rel: 'apple-touch-icon-precomposed',
          type: 'image/png',
          sizes: '76x76',
          href: 'favicon.png',
        },
        {
          rel: 'apple-touch-icon-precomposed',
          type: 'image/png',
          sizes: '120x120',
          href: 'favicon.png',
        },
        {
          rel: 'apple-touch-icon-precomposed',
          type: 'image/png',
          sizes: '152x152',
          href: 'favicon.png',
        },
        {
          rel: 'apple-touch-icon',
          href: 'favicon.png',
        },
        {
          rel: 'shortcut icon',
          href: 'favicon.ico',
        },
      ],
      script: [
        { src: 'js/core.min.js', body: true, mode: 'client' },
        { src: 'js/script.js', body: true, mode: 'client' },
      ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
      // '@assets/css/bootstrap.min.css',
      // '@assets/scss/custom.scss',
      '@assets/css/bootstrap.css',
      '@assets/css/bootstrap-grid.css',
      '@assets/css/bootstrap-reboot.css',
      '@assets/css/fonts.css',
      '@assets/css/styles.scss',
    ],
    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [{ src: '~/plugins/plugins', ssr: false }],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
      // https://go.nuxtjs.dev/eslint
      '@nuxtjs/pwa',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
      // https://go.nuxtjs.dev/axios
      '@nuxtjs/axios',
      // https://go.nuxtjs.dev/content
      '@nuxt/content',
      '@nuxtjs/gtm',
      '@nuxtjs/robots',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
    router: {
      base: '/',
    },
    robots: {
      UserAgent: '*',
      Disallow: process.env.APP_ENVIRONMENT != 'PRODUCTION' ? '/' : '',
    },
    publicRuntimeConfig: [
      {
        token: await getDirectusToken(),
        global: await getHomeData(),
        service: await getServicesPage(),
        about: await getAboutPage(),
        blog: await getBlogPage(),
        career: await getCareerPage(),
        contact: await getContactPage(),
        header: await getHeader(),
        footer: await getFooter(),
        global_seo: await getSEOSettings()
      },
    ],
  }
}
