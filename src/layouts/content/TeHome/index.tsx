import React from 'react';
import { Row, Col, Skeleton, Affix } from 'antd';
import communicate from '@/assets/svg/communicate.svg';
import questionnaire from '@/assets/svg/questionnaire.svg';
import study from '@/assets/svg/study.svg';
import styles from './index.less';

interface TeHomeProps {
  children: React.ReactNode | React.ReactElement;
}

const TeHome: React.FC<TeHomeProps> = ({ children }) => {
  return (
    <div className={styles.tehome}>
      <Row>
        <Col span={18} className={styles.tehome_left}>
          <section className={styles.init_section}>{children}</section>
        </Col>
        <Col span={6} className={styles.init_aside}>
          <aside>
            <div className={styles.tehome_one}>
              <h5>写下你想说的</h5>
              <ul>
                <li>
                  <div>
                    <img src={questionnaire} alt="error" />
                  </div>

                  <span>写文章</span>
                </li>
                <li>
                  <div>
                    <img src={communicate} alt="error" />
                  </div>

                  <span>发片刻</span>
                </li>
                <li>
                  <div>
                    <img src={study} alt="error" />
                  </div>
                  <span>撰小书</span>
                </li>
              </ul>
            </div>
            <Skeleton />
          </aside>

          <Affix offsetTop={80}>
            <div>
              <aside>
                <Skeleton />
              </aside>
              <aside>
                <p>
                  <a
                    onClick={() => {
                      window.open('http://beian.miit.gov.cn/', '_blank');
                    }}
                  >
                    皖ICP备2021008857号
                  </a>
                </p>
                <p>版权所有 © 2021 starryskystar</p>
              </aside>
            </div>
          </Affix>
        </Col>
      </Row>
    </div>
  );
};

export default TeHome;
