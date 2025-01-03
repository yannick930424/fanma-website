import { renderHook, act } from '@testing-library/react';
import { useLanguage } from '../../hooks/useLanguage';

describe('useLanguage', () => {
  it('should initialize with French language', () => {
    const { result } = renderHook(() => useLanguage());
    expect(result.current.language).toBe('fr');
  });

  it('should change language', () => {
    const { result } = renderHook(() => useLanguage());
    
    act(() => {
      result.current.setLanguage('en');
    });
    
    expect(result.current.language).toBe('en');
  });
});