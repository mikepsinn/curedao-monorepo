<?php
/*
*  GNU General Public License v3.0
*  Contributors: ADD YOUR NAME HERE, Mike P. Sinn
 */

namespace App\Properties\Base;
use App\Types\PhpTypes;
use App\UI\ImageUrls;
use App\UI\FontAwesome;
use App\Properties\BaseProperty;
class BaseSizeProperty extends BaseProperty
{
    use \App\Traits\PropertyTraits\IsInt;
	public $dbInput = 'integer,false';
	public $dbType = self::TYPE_INTEGER;
	public $default = 'undefined';
	public $description = 'Example: 178451';
	public $example = 672;
	public $fieldType = self::TYPE_INTEGER;
	public $fontAwesome = FontAwesome::QUESTION_CIRCLE;
	public $htmlType = self::TYPE_NUMBER;
	public $image = ImageUrls::QUESTION_MARK;
	public $importance = false;
	public $isOrderable = true;
	public $isSearchable = false;
	public $maximum = 2147483647;
	public $minimum = -2147483648;
	public $name = self::NAME;
	public const NAME = 'size';
	public $order = 99;
	public $phpType = \App\Types\PhpTypes::INTEGER;
	public $rules = 'required|integer|min:-2147483648|max:2147483647';
	public $showOnDetail = true;
	public $title = 'Size';
	public $type = self::TYPE_INTEGER;
	public $validations = 'required|integer|min:-2147483648|max:2147483647';

}
