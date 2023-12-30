import Title from '@/components/Main/Title';
import { GrNext, GrPrevious } from 'react-icons/gr';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import bulletActive from '@/assets/bulletActive.png';
import bullet from '@/assets/bullet.png';
import ProjectItem from '@/components/Main/ProjectItem';

function Project() {
  return (
    <Wrapper id="Project">
      <Title id="Project" color={true}>
        Project
      </Title>
      <SwiperWrapper>
        <SwiperBox
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation={{
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
          }}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
          }}
        >
          {Array.from({ length: 3 })
            .fill('')
            .map((_, i) => {
              return (
                <div>
                  <SwiperItem key={i}>
                    <ProjectItem type="web" />
                  </SwiperItem>
                  <SwiperItem key={i + 1}>
                    <ProjectItem type="mobile" />
                  </SwiperItem>
                </div>
              );
            })}
          <Prev className="swiper-prev" as={GrPrevious} />
          <Next className="swiper-next" as={GrNext} />
          <Page className="swiper-pagination" />
        </SwiperBox>
        <ProjectAdd>Add Project</ProjectAdd>
      </SwiperWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.themeColor.brown};
`;

const SwiperWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10%;
  height: 60%;
  position: relative;
`;

const SwiperBox = styled(Swiper)`
  width: 100%;
  height: 100%;
  padding: 0 40px;
`;

const SwiperItem = styled(SwiperSlide)`
  box-sizing: border-box;
  width: 100%;
  height: 90%;
  background-color: transparent;
  border: 4px solid white;
  border-radius: 20px;
`;

const Next = styled.button`
  position: absolute;
  top: 50%;
  right: 0%;
  transform: translateY(-50%) translateX(20%);
  background-color: transparent;
  color: white;
  width: 50px;
  height: 50px;
  cursor: pointer;
  z-index: 2;
  outline: none;
  border: none;

  &.swiper-button-disabled {
    color: ${(props) => props.theme.themeColor.brown};
  }
`;

const Prev = styled.button`
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translateY(-50%) translateX(-20%);
  background-color: transparent;
  color: white;
  width: 50px;
  height: 50px;
  cursor: pointer;
  z-index: 2;
  outline: none;
  border: none;
  &.swiper-button-disabled {
    color: ${(props) => props.theme.themeColor.brown};
  }
`;

const Page = styled.p`
  .swiper-pagination-bullet {
    width: 30px;
    height: 30px;
    background-color: transparent;
    background-image: url(${bullet});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }

  .swiper-pagination-bullet-active {
    width: 30px;
    height: 30px;
    transition: transform 1s;
    transform: scale(120%);
    background-color: transparent;
    background-image: url(${bulletActive});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
`;

const ProjectAdd = styled.button`
  position: absolute;
  top: -12%;
  right: 12%;
  background-color: transparent;
  color: white;
  padding: 5px;
  border: 1px solid white;
  border-radius: 5px;
  cursor: pointer;
`;

export default Project;
