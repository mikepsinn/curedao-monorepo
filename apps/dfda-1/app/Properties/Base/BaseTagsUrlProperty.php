<?php
/*
*  GNU General Public License v3.0
*  Contributors: ADD YOUR NAME HERE, Mike P. Sinn
 */

namespace App\Properties\Base;
use App\UI\ImageUrls;
use App\UI\FontAwesome;
use App\Properties\BaseProperty;
class BaseTagsUrlProperty extends BaseProperty
{
    use \App\Traits\PropertyTraits\IsString;
	public $dbInput = 'string,255';
	public $dbType = 'string';
	public $default = 'undefined';
	public $description = 'Example: https://api.github.com/repos/mikepsinn/qm-api/tags';
	public $example = 'https://api.github.com/repos/codenitive/laravel-oneauth/tags';
	public $fieldType = 'string';
	public $fontAwesome = FontAwesome::RAW_MEASUREMENTS_WITH_TAGS;
	public $htmlInput = 'text';
	public $htmlType = 'text';
	public $image = ImageUrls::RAW_MEASUREMENTS_WITH_TAGS;
	public $importance = false;
	public $isOrderable = false;
	public $isSearchable = true;
	public $maxLength = 255;
	public $name = self::NAME;
	public const NAME = 'tags_url';
	public $order = 99;
	public $phpType = 'string';
	public $rules = 'required|max:255';
	public $showOnDetail = true;
	public $title = 'Tags Url';
	public $type = 'string';
	public $validations = 'required|max:255';

}
