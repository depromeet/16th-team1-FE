import * as styles from './text-input.styles';

/** text-input 컴포넌트의 상태 (ex. error, success, warning, ..) */
export type TextInputStatusType = 'error';

interface TextInputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  // 기본 값
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;

  // UI 관련
  placeholder?: string;
  width?: number;
  height?: number;

  // 상태 관련
  status?: TextInputStatusType;
  message?: string;
}

export default function TextInput({
  value,
  onChange,

  placeholder,
  width,
  height,

  status,
  message,

  ...props
}: TextInputProps) {
  return (
    <div css={styles.textInputWrapper}>
      <textarea
        css={styles.textInput({ width, height, status })}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        data-has-value={value && value?.length > 0}
        {...props}
      />
      {status && message && <p css={styles.statusMessage(status)}>{message}</p>}
    </div>
  );
}
