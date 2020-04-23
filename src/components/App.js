import React from 'react';
import {connect} from 'react-redux';
import agent from '../agent';
import Search from './Search';

import InputGroup from 'react-bootstrap/InputGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const mapStateToProps = (state) => ({
  posts: state.posts,
});

const mapDispatchToProps = (dispatch) => ({
  onLoad: (payload) =>
    dispatch({type: 'SEARCH_POSTS_BY_QUERY', payload}),
});


class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(query) {
    this.props.onLoad(agent.Post.search(query, 1, 20));
  }

  render() {
    return (
      <div>
        <Container>
          <Row className="mt-5">
            <Col>
              <InputGroup size="lg" className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroup-sizing-sm">
                    Pesquisa
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Search callback={this.handleSearch}/>
              </InputGroup>

              <Tab.Container
                id="list-group-tabs-example"
                defaultActiveKey="#link1">
                <Row>
                  <Col sm={4}>
                    <ListGroup>
                      {
                        this.props.posts.map(
                            (item, i) =>
                              (
                                <ListGroup.Item
                                  key={i}
                                  action
                                  href={'#link' + i}>
                                  {item.title}
                                </ListGroup.Item>
                              ),
                        )
                      }
                    </ListGroup>
                  </Col>
                  <Col sm={8}>
                    <Tab.Content>
                      {
                        this.props.posts.map(
                            (item, i) =>
                              (
                                <Tab.Pane key={i} eventKey={'#link' + i}>
                                  {item.body}
                                </Tab.Pane>
                              ),
                        )
                      }
                    </Tab.Content>
                  </Col>

                </Row>
              </Tab.Container>

            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
