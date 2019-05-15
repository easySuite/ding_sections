<?php
/**
 * @file
 * Editorial base list Section terms.
 */

$plugin = array(
  'title' => t('Section description and image.'),
  'description' => t('Display image and description for current term of section vocabulary.'),
  'single' => TRUE,
  'render callback' => 'ding_sections_section_list_content_type_render',
  'category' => t('easyOPAC'),
);
