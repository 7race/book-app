import TextField from '@mui/material/TextField';
import { sx } from './Input.styled';
import type { FC } from 'react';
import type { TextFieldProps } from '@mui/material/TextField';

export const Input: FC<TextFieldProps> = ({ ...rest }) => <TextField sx={sx} {...rest} />;
