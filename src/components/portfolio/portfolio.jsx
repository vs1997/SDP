import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Masonry from 'react-masonry-css';
//Scss
import './portfolio.scss';
//Assets
import Arrow from '../../assets/portfolio/arrow.svg';

import To_Do_List from '../../assets/portfolio/project01/To_Do_List.png';
import Chat_App from '../../assets/portfolio/project02/Chat_App.png';
import Dev_Connector from '../../assets/portfolio/project03/Dev_Connector.png';
import Dev_Connector02 from '../../assets/portfolio/project04/Dev_Connector02.png';
import Fb_Clone3 from '../../assets/portfolio/project05/Fb_Clone3.png';
import Fb_Clone2 from '../../assets/portfolio/project06/Fb_Clone2.png';
// import Fb from '../../assets/portfolio/project06/preview.png';
//Components
import Button from '../ui-components/button/button';
import Title from '../ui-components/title/title';
import ProjectBox from '../ui-components/projectBox/projectBox';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // PORTFOLIO PROJECTS
      projects: [
        {
          id: '1',
          preview: To_Do_List,
          title: 'To Do List',
          tag: 'web',
        },
        {
          id: '2',
          preview: Fb_Clone3,
          title: 'Clone Facebook UI',
          tag: 'mobile',
        },
        {
          id: '3',
          preview: Fb_Clone2,
          title: 'Lost World',
          tag: 'mobile',
        },
        {
          id: '4',
          preview: Chat_App,
          title:
            'Chat App Using React Native, Hooks, Context API  and Firebase Real Time Database',
          tag: 'mobile',
        },
        {
          id: '5',
          preview: Dev_Connector,
          title: 'Lost World',
          tag: 'web',
        },
        {
          id: '6',
          preview: Dev_Connector02,
          title: 'Lost World',
          tag: 'web',
        },
      ],
      // PORTFOLIO GALLERY WILL LOAD THIS AFTER FUNCTION "filterGallery" FINISH FILTERING
      filterResult: null,
      pickedFilter: 'all',
      filterMenuActive: false,
      pickedFilterDropdown: 'NEWEST',
    };
  }

  // FIRST LOAD
  componentDidMount() {
    this.filterGallery('all');
  }

  //FILTER PORTFOLIO FUNCTION
  filterGallery = (target) => {
    let projectsArr = [...this.state.projects];
    let result;

    if (target !== 'all') {
      result = projectsArr.filter((project) => project.tag === target);
    } else {
      result = projectsArr;
    }

    this.setState({
      filterResult: result,
      pickedFilter: target,
      pickedFilterDropdown: 'NEWEST',
    });
  };

  // FILTER DROP DOWN HOVER MENU FUNCTION
  filterMenuHover = (event) => {
    if (event) {
      this.setState({ filterMenuActive: true });
    } else {
      this.setState({ filterMenuActive: false });
    }
  };

  // FILTER DROP DOWN HANDLER
  filterDropDownHandler = (filter) => {
    this.setState({ pickedFilterDropdown: filter, filterMenuActive: false });

    let projectsArr = [...this.state.filterResult];
    let result;

    if (filter === 'NEWEST') {
      result = projectsArr.sort((a, b) => (a.id > b.id ? 1 : -1));
    } else if (filter === 'OLDEST') {
      result = projectsArr.sort((a, b) => (a.id > b.id ? 1 : -1)).reverse();
    }

    this.setState({ filterResult: result });
  };

  // RENDER
  render() {
    // PORTFOLIO GALLERY RENDER
    let projectsRender = null;
    if (this.state.filterResult) {
      projectsRender = this.state.filterResult.map((project) => (
        <ProjectBox
          preview={project.preview}
          key={project.id}
          title={project.title}
          tag={project.tag}
        />
      ));
    }
    // PORTFOLIO GALLERY BREAKPOINTS
    const portfolioBreakpoints = {
      default: 3,
      1100: 3,
      700: 2,
      500: 1,
    };
    // PORTFOLIO FILTER DROPDOWN MENY RENDER
    let filterDroppDown = null;
    if (this.state.filterMenuActive) {
      filterDroppDown = (
        <div className='portfolio__filter-menu shadow'>
          <p
            className='font12'
            onClick={() => this.filterDropDownHandler('NEWEST')}
          >
            NEWEST
          </p>
          <p
            className='font12'
            onClick={() => this.filterDropDownHandler('OLDEST')}
          >
            OLDEST
          </p>
        </div>
      );
    }

    return (
      <div id='portfolio'>
        <div className='wrapper'>
          <Title title='WORK SHOWCASE.' />
          <Row>
            <Col xs={12} sm={12} md={8} lg={9}>
              <div className='portfolio__nav'>
                <ul>
                  <li
                    className={
                      this.state.pickedFilter === 'all'
                        ? 'portfolio__nav-active font12'
                        : 'font12'
                    }
                    onClick={() => this.filterGallery('all')}
                  >
                    {/* <img src='public/To_Do_List.png' alt=''></img> */}
                    ALL
                  </li>
                  <li
                    className={
                      this.state.pickedFilter === 'mobile'
                        ? 'portfolio__nav-active font12'
                        : 'font12'
                    }
                    onClick={() => this.filterGallery('mobile')}
                  >
                    MOBILE
                  </li>
                  {/* <li
                    className={this.state.pickedFilter === "illustrations" ? "portfolio__nav-active font12" : "font12"}
                    onClick={() => this.filterGallery("illustrations")}
                  >
                    ILLUSTRATIONS
                  </li> */}
                  <li
                    className={
                      this.state.pickedFilter === 'web'
                        ? 'portfolio__nav-active font12'
                        : 'font12'
                    }
                    onClick={() => this.filterGallery('web')}
                  >
                    WEB
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={3}>
              <div
                className='portfolio__filter'
                onMouseEnter={() => this.filterMenuHover(true)}
                onMouseLeave={() => this.filterMenuHover(false)}
              >
                <p className='font12'>
                  {this.state.pickedFilterDropdown} FIRST
                </p>
                <img src={Arrow} alt='arrow' />
                {filterDroppDown}
              </div>
            </Col>
          </Row>
          <Masonry
            breakpointCols={portfolioBreakpoints}
            className='my-masonry-grid'
            columnClassName='mint__gallery'
          >
            {projectsRender}
          </Masonry>
          <Row className='flex-center padding40'>
            <Button label='HAVE WORK FOR US?' target={'contact'} />
          </Row>
        </div>
      </div>
    );
  }
}

export default Portfolio;
