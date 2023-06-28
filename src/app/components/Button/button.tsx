import React from 'react';
import Button from 'react-bootstrap/Button';
import { Google } from 'react-bootstrap-icons';

    export const LoginButton = ({children}) => (
      <Button variant="primary" type="submit" className="w-100">
        {children}
      </Button>
    );
    
    export const GoogleLoginButton = ({children}) => (
      <Button variant="inline" type="submit" className="w-100 btn btn-outline-primary">
        <Google /> {children}
      </Button>
    );