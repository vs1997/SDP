import React from 'react';
import Swiper from 'react-id-swiper';
// SCSS
import './blog.scss';
import 'swiper/css/swiper.css';
// Assets
import blog1 from '../../assets/blog/story01/blog1.jpg';
import blog2 from '../../assets/blog/story02/blog2.jpg';
import blog3 from '../../assets/blog/story03/blog3.jpg';
// import Preview01 from '../../assets/blog/story01/preview.png';
// import Preview02 from '../../assets/blog/story02/preview.png';
// import Preview03 from '../../assets/blog/story03/preview.png';
// import Preview04 from '../../assets/blog/story04/preview.png';
// import Preview05 from '../../assets/blog/story05/preview.png';
// import Preview06 from '../../assets/blog/story06/preview.png';
// Components
import Title from '../ui-components/title/title';
import BlogBox from './blogBox';

class Blog extends React.Component {
  state = {
    // LIST ARRAY OF BLOG STORIES
    stories: [
      {
        image: blog1,
        id: '1',
        title: 'Push Notification for android in react native using firebase!',
        description:
          'In this story we will learn how to implement push notification for android in react native.',
        url:
          'https://medium.com/@rempire230/push-notification-for-android-in-react-native-282019867f86/',
        date: '02 March 2019',
      },
      {
        image: blog2,
        id: '2',
        title:
          'User Authentication with JWT using Node, Express and Mongo Db(Altas)!',
        description:
          'I had just created user authentication process using Express & Node JS. For Database i had used Mongo DB.',
        url:
          'https://medium.com/@rempire230/user-authentication-with-jwt-using-node-express-and-mongo-db-altas-f0256232abb1',
        date: '29 March 2019',
      },
      {
        image: blog3,
        id: '3',
        title:
          'User Auth Process with React Native & Firebase (Real time database)!',
        description:
          'I was looking to reduce effort to build small application. As, if you are working with react native, it provide unidirectional data flow. You need to create api that will communicate with your App and Database.',
        url:
          'https://medium.com/@rempire230/user-auth-process-with-react-native-firebase-real-time-database-b8bda2bbf0b',
        date: '20 May 2019',
      },
      // {
      //   image: Preview04,
      //   id: "4",
      //   title: "BLOG TITLE!",
      //   description: "Lorem tabore et dolore magna aliqua ipsum dolor undo thes.",
      //   date: "15 May 2020",
      // },
      // {
      //   image: Preview05,
      //   id: "5",
      //   title: "BLOG ARTICLE!",
      //   description: "Lorem tabore et dolore magna aliqua ipsum dolor undo thes.",
      //   date: "20 May 2020",
      // },
      // {
      //   image: Preview06,
      //   id: "6",
      //   title: "AWESOME TITLE!",
      //   description: "Lorem tabore et dolore magna aliqua ipsum dolor undo thes.",
      //   date: "23 May 2020",
      // },
    ],
  };

  render() {
    // BLOG STORIES RENDER
    let storiesRender = null;
    if (this.state.stories) {
      storiesRender = this.state.stories.map((story) => (
        <div key={story.id}>
          <BlogBox article={story} />
        </div>
      ));
    }
    // OPTIONS FOR BLOG SLIDER
    const params = {
      grabCursor: true,
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      breakpoints: {
        1200: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      },
    };

    return (
      <div className='blog' id='blog'>
        <div className='wrapper'>
          <Title title='MY BLOG.' />
          <p className='font12'>
            Respect skills & talent only. Creativity>Logics>Knowledge.
          </p>
          <div className='padding30'>
            <Swiper {...params}>{storiesRender}</Swiper>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
