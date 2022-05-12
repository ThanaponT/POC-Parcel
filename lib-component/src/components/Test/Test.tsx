import React, {FC, useEffect, useState } from 'react';
import axios from "axios";
import { Button, Card, CardBody, CardHeader, CardText } from 'reactstrap';
const baseURL = `${process.env.API_ENDPOINT}/posts/1`;

interface IPost {
  title: string,
  body: string
}
const Test: FC = () => {

  const [post, setPost] = useState<IPost>({
    body: '',
    title: ''
  });
  const language = document.documentElement.lang?.toString() ?? 'en';

  useEffect(() => {
    axios.get(baseURL).then((response: any) => {
      var data = response.data
      setPost(data)
    });
  }, []);
  return (
    <Card>
          <CardHeader>
          {post.title}
          Language : {language}
          </CardHeader>
          <CardBody>
              <CardText>
              {post.body}
              </CardText>
              <Button color='success'>
                  Button
              </Button>
          </CardBody>
    </Card>
  );
}
  
  export default Test;